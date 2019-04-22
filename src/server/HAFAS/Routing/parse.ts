import { addMilliseconds, differenceInMinutes, parse } from 'date-fns';
import { flatten } from 'lodash';
import { HafasResponse, LocL, ProdL } from 'types/hafas';
import {
  OutConL,
  SecL,
  StopL,
  TripSearchResponse,
} from 'types/hafas/TripSearch';
import {
  Route,
  Route$Arrival,
  Route$Departure,
  Route$JourneySegment,
  Route$Stop,
} from 'types/routing';
import { Station } from 'types/station';

function parseDuration(duration: string) {
  const sanitized = duration.padStart(8, '0');
  const days = Number.parseInt(sanitized.slice(0, 2), 10);
  const hours = Number.parseInt(sanitized.slice(2, 4), 10);
  const minutes = Number.parseInt(sanitized.slice(4, 6), 10);
  const seconds = Number.parseInt(sanitized.slice(6, 8), 10);

  return (
    (seconds + minutes * 60 + hours * 60 * 60 + days * 60 * 60 * 24) * 1000
  );
}

const nameRegex = /O=([^@]+)/;
const evaRegex = /L=(\d+)/;

function parseFullStation(fullStation: string): Station {
  const titleMatch = fullStation.match(nameRegex);
  const idMatch = fullStation.match(evaRegex);

  let title = '';
  let id = '';

  if (titleMatch && titleMatch[1]) title = titleMatch[1];
  if (idMatch && idMatch[1]) id = idMatch[1].padStart(7, '0');

  return {
    title,
    id,
  };
}

class Journey {
  raw: OutConL;
  date: number;
  journey: Route;
  prodL: ProdL[];
  locL: Station[];
  constructor(raw: OutConL, prodL: ProdL[], locL: LocL[]) {
    this.raw = raw;
    this.prodL = prodL;
    this.locL = locL.map(l => ({
      title: l.name,
      id: l.extId,
    }));
    this.date = parse(raw.date, 'yyyyMMdd', new Date()).getTime();
    const segments = raw.secL
      .map(this.parseSegment)
      .filter<Route$JourneySegment>(Boolean as any);

    this.journey = {
      cid: raw.cid,
      date: this.date,
      duration: parseDuration(raw.dur),
      changes: raw.chg,
      ...this.parseArrival(raw.arr),
      ...this.parseDeparture(raw.dep),
      segments,
      segmentTypes: segments.map(s => s.trainType),
      raw: global.PROD ? undefined : raw,
    };
  }
  parseStops = (stops?: StopL[]): Route$Stop[] | undefined => {
    if (!stops) return;

    return stops.map(stop => {
      // eslint-disable-next-line no-unused-vars
      const { scheduledArrival, ...arrival } = this.parseArrival(stop);
      // eslint-disable-next-line no-unused-vars
      const { scheduledDeparture, ...departure } = this.parseDeparture(stop);

      return {
        station: this.locL[stop.locX],
        ...arrival,
        ...departure,
      };
    });
  };
  parseSegment = (t: SecL): undefined | Route$JourneySegment => {
    switch (t.type) {
      case 'JNY': {
        const [
          // eslint-disable-next-line no-unused-vars
          T,
          fullStart,
          fullDestination,
          // eslint-disable-next-line no-unused-vars
          departureString,
          // eslint-disable-next-line no-unused-vars
          arrivalString,
          // eslint-disable-next-line no-unused-vars
          trainString,
          // eslint-disable-next-line no-unused-vars
          u1,
          // eslint-disable-next-line no-unused-vars
          u2,
          // eslint-disable-next-line no-unused-vars
          u3,
        ] = t.jny.ctxRecon.split('$');
        // const train = trainString.replace(/ +/g, ' ');

        const { scheduledArrival, ...arrival } = this.parseArrival(t.arr);
        const { scheduledDeparture, ...departure } = this.parseDeparture(t.dep);

        const product = this.prodL[t.jny.prodX];

        return {
          train: product.addName || product.name,
          trainId: product.prodCtx.line,
          trainNumber: product.prodCtx.num,
          trainType: product.prodCtx.catOut,
          changeDuration: t.jny.chgDurR,
          segmentStart: parseFullStation(fullStart),
          segmentDestination: parseFullStation(fullDestination),
          stops: this.parseStops(t.jny.stopL),
          ...arrival,
          ...departure,
          duration:
            scheduledArrival &&
            scheduledDeparture &&
            scheduledArrival - scheduledDeparture,
          finalDestination: t.jny.dirTxt,
          product: global.PROD ? undefined : product,
          raw: global.PROD ? undefined : t,
        };
      }
      // case 'WALK':
      default:
        return undefined;
    }
  };
  parseTime(time?: string): number | undefined {
    if (!time) return undefined;

    return addMilliseconds(this.date, parseDuration(time)).getTime();
  }
  parseArrival(a: {
    aTimeS?: string;
    aTimeR?: string;
    aPlatfS?: string;
    aPlatfR?: string;
  }): Route$Arrival {
    const scheduledArrival = this.parseTime(a.aTimeS);
    let arrival = scheduledArrival;
    let arrivalDelay;

    if (a.aTimeR) {
      arrival = this.parseTime(a.aTimeR);
      arrivalDelay =
        arrival &&
        scheduledArrival &&
        differenceInMinutes(arrival, scheduledArrival);
    }

    return {
      scheduledArrivalPlatform: a.aPlatfR && a.aPlatfS,
      arrivalPlatform: a.aPlatfR || a.aPlatfS,
      scheduledArrival,
      arrival,
      arrivalDelay,
    };
  }
  parseDeparture(d: {
    dTimeS?: string;
    dTimeR?: string;
    dPlatfS?: string;
    dPlatfR?: string;
  }): Route$Departure {
    const scheduledDeparture = this.parseTime(d.dTimeS);
    let departure = scheduledDeparture;
    let departureDelay;

    if (d.dTimeR) {
      departure = this.parseTime(d.dTimeR);
      departureDelay =
        departure &&
        scheduledDeparture &&
        differenceInMinutes(departure, scheduledDeparture);
    }

    return {
      scheduledDeparturePlatform: d.dPlatfR && d.dPlatfS,
      departurePlatform: d.dPlatfR || d.dPlatfS,
      scheduledDeparture,
      departure,
      departureDelay,
    };
  }
}

export default (r: HafasResponse<TripSearchResponse>): Route[] => {
  const result = r.svcResL.map(svc =>
    svc.res.outConL.map(
      j => new Journey(j, svc.res.common.prodL, svc.res.common.locL).journey
    )
  );

  return flatten(result);
};