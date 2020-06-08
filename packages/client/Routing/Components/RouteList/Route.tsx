import { formatDuration } from 'client/Routing/util';
import { SyntheticEvent, useMemo } from 'react';
import cc from 'clsx';
import Paper from '@material-ui/core/Paper';
import PlannedType from 'client/Common/Components/PlannedType';
import RouteSegments from './RouteSegments';
import Time from 'client/Common/Components/Time';
import useStyles from './Route.style';
import type { SingleRoute } from 'types/routing';

interface Props {
  route: SingleRoute;
  detail: boolean;
  onClick: (e: SyntheticEvent) => void;
}

const Route = ({ route, detail, onClick }: Props) => {
  const classes = useStyles();
  const segmentTypes = useMemo(() => {
    if (route.segmentTypes.length > 1) return route.segmentTypes.join(' - ');

    const firstSegment = route.segments[0];

    if (!firstSegment) return null;

    return (
      <span>
        {firstSegment.train.name}
        {'plannedSequence' in firstSegment && (
          <PlannedType plannedSequence={firstSegment.plannedSequence} />
        )}
      </span>
    );
  }, [route]);

  return (
    <Paper
      data-testid={`Route-${route.cid}`}
      onClick={onClick}
      square
      className={cc(classes.main)}
    >
      <Time
        className={classes.time}
        real={route.departure.time}
        delay={route.departure.delay}
      />
      <Time
        className={classes.time}
        real={route.arrival.time}
        delay={route.arrival.delay}
      />
      <span>{formatDuration(route.duration)}</span>
      <span>{route.changes}</span>
      {detail ? (
        <RouteSegments className={classes.detail} segments={route.segments} />
      ) : (
        <span className={classes.products}>{segmentTypes}</span>
      )}
    </Paper>
  );
};

export default Route;