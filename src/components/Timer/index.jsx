import React from 'react';
import PropTypes from 'prop-types';

import { TimerContainer, Card } from './styles';
import { toDate } from '../../utils';

const order = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];

let interval;

const Timer = (props) => {
  const { to } = props;
  const [difference, setDifference] = React.useState(
    toDate(new Date(to) - new Date())
  );
  React.useEffect(() => {
    interval = setInterval(() => {
      const diff = toDate(new Date(to) - new Date());
      setDifference(diff);
    }, 1000);
  }, []);
  React.useEffect(() => {
    if (new Date(to) - new Date() <= 0) {
      clearInterval(interval);
    }
  }, [difference]);
  return (
    <TimerContainer>
      {order.map(
        (unit, index) =>
          difference[unit] !== undefined && (
            <Card key={`${unit}-${index}`}>
              <div className="number">
                {difference[unit] >= 0 ? difference[unit] : 0}
              </div>
              <div className="unit">{`${
                difference[unit] >= 0 ? unit : unit.slice(0, -1)
              }`}</div>
            </Card>
          )
      )}
    </TimerContainer>
  );
};

export default Timer;

Timer.propTypes = {
  to: PropTypes.string.isRequired,
};
