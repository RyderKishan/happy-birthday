/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Zoom, IconButton } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import { useLocalStorage } from '../../../hooks';
import { HomeContainer, SubSection, Action } from '../styles';
import { allScreens } from './constants';
import Puzzle from '../../../components/Puzzle';

const getRenderElement = (screen) => {
  switch (screen.type) {
    case 'text':
      return (
        <SubSection>
          <Typography
            align="center"
            gutterBottom
            className="heading"
            color="textPrimary"
          >
            {screen.heading}
          </Typography>
          <Typography
            align="center"
            variant="caption"
            className="description"
            color="textPrimary"
          >
            {screen.text}
          </Typography>
        </SubSection>
      );
    case 'audio':
      return (
        <SubSection>
          <Typography
            align="center"
            gutterBottom
            className="heading"
            color="textPrimary"
          >
            {screen.heading}
          </Typography>
          <audio controls>
            <source src={`/audio/${screen.src}`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <Typography
            align="center"
            variant="caption"
            className="description"
            color="textPrimary"
          >
            {screen.text}
          </Typography>
        </SubSection>
      );
    case 'video':
      return (
        <SubSection>
          <Typography
            align="center"
            gutterBottom
            className="heading"
            color="textPrimary"
          >
            {screen.heading}
          </Typography>
          <video controls>
            <source src={`/video/${screen.src}`} type="video/mp4" />
            Your browser does not support the video element.
          </video>
          <Typography
            align="center"
            variant="caption"
            className="description"
            color="textPrimary"
          >
            {screen.text}
          </Typography>
        </SubSection>
      );
    case 'image':
      return (
        <SubSection>
          {screen.heading && (
            <Typography
              align="center"
              gutterBottom
              className="heading"
              color="textPrimary"
            >
              {screen.heading}
            </Typography>
          )}
          <div className="image">
            <img src={`/images/${screen.src}`} alt={screen.src} />
          </div>
          <Typography
            align="center"
            variant="caption"
            className="description"
            color="textPrimary"
          >
            {screen.text}
          </Typography>
        </SubSection>
      );
    case 'puzzle':
      return (
        <SubSection>
          <Puzzle screen={screen} />
        </SubSection>
      );
    default:
      return null;
  }
};

const Screen = (props) => {
  const { callHook } = props;
  const [page, setPage] = useLocalStorage('screen-page-no', 0);

  React.useEffect(() => {
    if (page > 0) callHook(page);
  }, [page]);

  return (
    <HomeContainer>
      {allScreens.map(
        (screen, index) =>
          page === index && (
            <Zoom key={screen.id} in>
              {getRenderElement(screen)}
            </Zoom>
          )
      )}
      <Action>
        <IconButton
          color="secondary"
          aria-label="before"
          disabled={page === 0}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="next"
          disabled={page === allScreens.length - 1}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <NavigateNextIcon />
        </IconButton>
      </Action>
    </HomeContainer>
  );
};

Screen.defaultProps = {
  callHook: () => {}
};

Screen.propTypes = {
  callHook: PropTypes.func
};

export default Screen;
