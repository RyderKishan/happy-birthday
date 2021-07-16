/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { Typography, Zoom, IconButton } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import { useLocalStorage } from '../../../hooks';
import { HomeContainer, SubSection, Action } from '../styles';
import { allScreens } from './constants';

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
    default:
      return null;
  }
};

const Screen = () => {
  const [page, setPage] = useLocalStorage('screen-page-no', 0);

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

export default Screen;
