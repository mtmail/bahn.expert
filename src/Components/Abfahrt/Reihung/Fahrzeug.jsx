// @flow
import './Fahrzeug.scss';
import ActionAccessible from 'material-ui/svg-icons/action/accessible';
import cc from 'classcat';
import MapsLocalDining from 'material-ui/svg-icons/maps/local-dining';
import React from 'react';
import type { Fahrzeug, FahrzeugType, SpecificType } from 'types/reihung';

type Props = {
  fahrzeug: Fahrzeug,
  destination: ?string,
  type: FahrzeugType,
  specificType: ?SpecificType,
};

type State = {
  info: AdditionalFahrzeugInfos,
};

// Klasse: 0 = unknown
// Klasse: 1 = Nur erste
// Klasse: 2 = Nur zweite
// Klasse: 3 = 1 & 2
// klasse: 4 = Nicht für Passagiere. z.B. Triebkopf
type AdditionalFahrzeugInfos = {
  klasse: 0 | 1 | 2 | 3 | 4,
  speise: boolean,
  rollstuhl: boolean,
  comfort: boolean,
};

const comfort = [
  {
    ICE1: ['11'],
    ICE2: ['26', '36'],
    ICE3: ['28', '38'],
    ICE3V: ['26', '36'],
    ICE4: ['11'],
    ICET411: ['28', '38'],
    ICET415: ['28', '38'],
    IC2: ['5'],
  },
  {
    ICE1: ['7'],
    ICE2: ['23', '33'],
    ICE3: ['27', '37'],
    ICE3V: ['25', '35'],
    ICE4: ['7'],
    ICET411: ['27', '37'],
    ICET415: ['23', '33'],
    IC2: ['4'],
  },
];

function comfortLogic(fahrzeug: Fahrzeug, klasse: number, type: FahrzeugType, specificType: ?SpecificType) {
  const comfortSeats: ?(string[]) = specificType && comfort[klasse - 1]?.[specificType];

  if (comfortSeats) {
    return comfortSeats.includes(fahrzeug.wagenordnungsnummer);
  } else if (type === 'IC') {
    if (fahrzeug.wagenordnungsnummer === '12' && fahrzeug.fahrzeugtyp === 'Avmz') {
      return true;
    } else if (
      fahrzeug.wagenordnungsnummer === '10' &&
      (fahrzeug.fahrzeugtyp === 'Bvmsz' || fahrzeug.fahrzeugtyp === 'Bimz')
    ) {
      return true;
    }
  }

  return false;
}

function getFahrzeugInfo(fahrzeug: Fahrzeug, type: FahrzeugType, specificType: ?SpecificType): AdditionalFahrzeugInfos {
  const data: AdditionalFahrzeugInfos = {
    klasse: 0,
    speise: false,
    rollstuhl: Boolean(fahrzeug.allFahrzeugausstattung.find(a => a.ausstattungsart === 'PLAETZEROLLSTUHL')),
    comfort: false,
  };

  switch (fahrzeug.kategorie) {
    case 'DOPPELSTOCKSTEUERWAGENZWEITEKLASSE':
    case 'DOPPELSTOCKWAGENZWEITEKLASSE':
    case 'REISEZUGWAGENZWEITEKLASSE':
    case 'STEUERWAGENZWEITEKLASSE':
      data.klasse = 2;
      break;
    case 'HALBSPEISEWAGENZWEITEKLASSE':
    case 'SPEISEWAGEN':
      data.klasse = 2;
      data.speise = true;
      break;
    default:
      break;
    case 'STEUERWAGENERSTEZWEITEKLASSE':
    case 'REISEZUGWAGENERSTEZWEITEKLASSE':
      data.klasse = 3;
      break;
    case 'HALBSPEISEWAGENERSTEKLASSE':
      data.klasse = 1;
      data.speise = true;
      break;
    case 'DOPPELSTOCKWAGENERSTEKLASSE':
    case 'REISEZUGWAGENERSTEKLASSE':
    case 'STEUERWAGENERSTEKLASSE':
      data.klasse = 1;
      break;
    case 'TRIEBKOPF':
    case 'LOK':
      data.klasse = 4;
  }

  data.comfort = comfortLogic(fahrzeug, data.klasse, type, specificType);

  return data;
}

export default class FahrzeugComp extends React.PureComponent<Props, State> {
  static getDerivedStateFromProps(props: Props) {
    return {
      info: getFahrzeugInfo(props.fahrzeug, props.type, props.specificType),
    };
  }
  render() {
    const { fahrzeug /* , destination*/ } = this.props;
    const { info } = this.state;

    const { startprozent, endeprozent } = fahrzeug.positionamhalt;

    const start = Number.parseInt(startprozent, 10);
    const end = Number.parseInt(endeprozent, 10);

    const pos = {
      left: `${startprozent}%`,
      width: `${end - start}%`,
    };

    return (
      <div
        style={pos}
        className={cc([
          'Fahrzeug',
          {
            'Fahrzeug--closed': fahrzeug.status === 'GESCHLOSSEN',
          },
        ])}
      >
        <span className={`Fahrzeug__klasse Fahrzeug__klasse--${info.klasse}`} />
        <span className="Fahrzeug__nummer">{fahrzeug.wagenordnungsnummer}</span>
        {info.rollstuhl && <ActionAccessible className="Fahrzeug--icon" />}
        {info.speise && <MapsLocalDining className="Fahrzeug--icon" />}
        {info.comfort && <span className="Fahrzeug--comfort" />}
        <span className="Fahrzeug--type">{fahrzeug.fahrzeugtyp}</span>
        {/* {destination && <span className="Fahrzeug--destination">{destination}</span>} */}
      </div>
    );
  }
}