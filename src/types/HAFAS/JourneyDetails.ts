import type {
  Common,
  CommonStopInfo,
  GenericHafasRequest,
  Journey,
  OptionalLocL,
  ParsedPolyline,
  ParsedProduct,
  RemL,
} from '.';
import type { EvaNumber } from '@/types/common';
import type { Route$Auslastung, Route$Stop } from '@/types/routing';

// Additional Information we can only get from HAFAS in case of RIS Details. (Occupancy & correct operator names)
export interface AdditionalJourneyInformation {
  operatorName?: string;
  occupancy: Record<EvaNumber, Route$Auslastung>;
  polyline?: ParsedPolyline;
}

export interface JourneyDetailsResponse {
  common: Common;
  journey: Journey;
  fpB: string;
  fpE: string;
  planrtTS: string;
}

interface JourneyDetailsRequestReq {
  jid: string;
  getAltCoordinates?: boolean;
  getAnnotations?: boolean;
  getPasslist?: boolean;
  getPolyline?: boolean;
  getSimpleTrainComposition?: boolean;
  getTrainComposition?: boolean;

  aDate?: string;
  aIdx?: number;
  aLoc?: OptionalLocL;
  aTime?: string;
  dDate?: string;
  dIdx?: number;
  dLoc?: OptionalLocL;
  dTime?: string;
  date?: string;
  name?: string;
  polySplitting?: boolean;
}
export interface JourneyDetailsRequest
  extends GenericHafasRequest<'JourneyDetails', JourneyDetailsRequestReq> {}

export interface Route$ValidArrivalStop extends Route$Stop {
  arrival: CommonStopInfo;
}

export interface Route$ValidDepartureStop extends Route$Stop {
  departure: CommonStopInfo;
}

export interface ParsedJourneyDetails {
  train: ParsedProduct;
  auslastung?: Route$Auslastung;
  jid: string;
  firstStop: Route$ValidDepartureStop;
  lastStop: Route$ValidArrivalStop;
  stops: Route$Stop[];
  messages?: RemL[];
  polylines?: ParsedPolyline[];
}
