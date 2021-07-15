import React from 'react';
import PropTypes from 'prop-types';

import { TimerContainer, Card } from './styles';
import { toDate } from '../../utils';

const order = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];

let interval;

const Timer = (props) => {
  const { to, timeOffset, callBackOnTime } = props;
  const [difference, setDifference] = React.useState(
    toDate(new Date(to) - (new Date() - timeOffset))
  );
  React.useEffect(() => {
    interval = setInterval(() => {
      const diff = toDate(new Date(to) - (new Date() - timeOffset));
      setDifference(diff);
    }, 1000);
  }, []);
  React.useEffect(() => {
    if (new Date(to) - (new Date() - timeOffset) <= 0) {
      clearInterval(interval);
      callBackOnTime();
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

Timer.defaultProps = {
  timeOffset: 0,
  callBackOnTime: () => {}
};

Timer.propTypes = {
  to: PropTypes.string.isRequired,
  callBackOnTime: PropTypes.func,
  timeOffset: PropTypes.number
};
