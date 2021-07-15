import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Zoom, CircularProgress } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import Timer from '../../components/Timer';

import { HomeContainer, SubSection } from './styles';
import { enableDate, randomText } from './constants';
import { useTimeOffset } from './hooks';
import Screen from './Screen';

const Home = (props) => {
  const { setSnack } = props;
  const [showApp, toggleApp] = React.useState(false);
  const { data: timeOffset = 0, isLoading, isError } = useTimeOffset();
  React.useEffect(() => {
    if (timeOffset === 0 || !timeOffset) return;
    const toToggleApp =
      new Date().valueOf() - timeOffset > new Date(enableDate).valueOf();
    toggleApp(toToggleApp);
    if (Math.abs(timeOffset) > 60000 && !toToggleApp) {
      setSnack({
        severity: 'warning',
        message: 'System time not in sync'
      });
    }
  }, [timeOffset]);
  const callBackOnTime = () => {
    toggleApp(
      new Date().valueOf() - timeOffset > new Date(enableDate).valueOf()
    );
  };
  if (isLoading)
    return (
      <HomeContainer>
        <SubSection>
          <CircularProgress />
        </SubSection>
      </HomeContainer>
    );
  if (isError)
    return (
      <HomeContainer>
        <SubSection>
          <Typography
            align="center"
            gutterBottom
            className="heading"
            color="textPrimary"
          >
            <WarningIcon fontSize="large" />
          </Typography>
          <Typography
            align="center"
            variant="caption"
            className="description"
            color="textPrimary"
          >
            Network Error
          </Typography>
        </SubSection>
      </HomeContainer>
    );
  if (!showApp)
    return (
      <HomeContainer>
        <Zoom in>
          <SubSection>
            <Typography
              align="center"
              gutterBottom
              className="heading"
              color="textPrimary"
            >
              Just wait baby!
            </Typography>
            <Typography
              align="center"
              variant="caption"
              className="description"
              color="textPrimary"
            >
              <Timer
                callBackOnTime={callBackOnTime}
                timeOffset={timeOffset}
                to={enableDate}
              />
            </Typography>
            <Typography
              align="center"
              variant="caption"
              className="description"
              color="textPrimary"
            >
              {
                randomText[
                  Math.floor(Math.random() * randomText.length - 1) + 1
                ]
              }
            </Typography>
          </SubSection>
        </Zoom>
      </HomeContainer>
    );

  return <Screen />;
};

Home.defaultProps = {
  setSnack: () => {}
};

Home.propTypes = {
  setSnack: PropTypes.func
};

export default Home;
