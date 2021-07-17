import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Typography,
  Zoom,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent
} from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import Timer from '../../components/Timer';

import { HomeContainer, SubSection } from './styles';
import { enableDate, randomText } from './constants';
import { useTimeOffset } from './hooks';
import Screen from './Screen';

const Home = (props) => {
  const randomIndex = Math.floor(Math.random() * randomText.length - 1) + 1;
  const { setSnack } = props;
  const [showApp, toggleApp] = React.useState(false);
  const [initialOpen, setInitialOpen] = React.useState(randomIndex % 5 === 0);
  const { data: timeOffset = 0, isLoading, isError } = useTimeOffset();
  React.useEffect(() => {
    if (timeOffset === 0 || !timeOffset) return;
    const toToggleApp =
      new Date().valueOf() - timeOffset > new Date(enableDate).valueOf();
    toggleApp(toToggleApp);
    if (toToggleApp) {
      // https://webhook.site/9865ba9c-4b3d-4e22-8a7a-1f08871b0aba
    }
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
        <Dialog
          onClose={() => setInitialOpen(false)}
          aria-labelledby="simple-dialog-title"
          open={initialOpen}
        >
          <DialogTitle id="simple-dialog-title">Warning</DialogTitle>
          <DialogContent>
            <Typography variant="subtitle2">
              This site is made to motivate baby to learn React, HTML and CSS
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setInitialOpen(false)}
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
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
              {randomText[randomIndex]}
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
