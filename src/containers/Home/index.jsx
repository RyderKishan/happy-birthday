import React, { useEffect } from 'react';
import { Typography, Zoom, IconButton } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Timer from '../../components/Timer';
import { get } from '../../api';
import { useLocalStorage } from '../../hooks';

import { HomeContainer, SubSection, Action } from './styles';
import { enableDate, randomText } from './constants';
import { useTime } from './hooks';

const Home = () => {
  const [page, setPage] = useLocalStorage('home-page-no', 0);
  const enableApp = new Date().valueOf() > new Date(enableDate).valueOf();
  const { data } = useTime();
  console.log('data', data);
  if (!enableApp)
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
              <Timer to={enableDate} />
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

  return (
    <HomeContainer>
      {page === 0 && (
        <Zoom in>
          <SubSection>
            <Typography
              align="center"
              gutterBottom
              className="heading"
              color="textPrimary"
            >
              Hi Baby!
            </Typography>
            <Typography
              align="center"
              variant="caption"
              className="description"
              color="textPrimary"
            >
              Page 0
            </Typography>
          </SubSection>
        </Zoom>
      )}
      {page === 1 && (
        <Zoom in>
          <SubSection>
            <Typography color="textPrimary">Page 0</Typography>
          </SubSection>
        </Zoom>
      )}
      {page === 2 && (
        <Zoom in>
          <SubSection>
            <Typography color="textPrimary">Page 0</Typography>
          </SubSection>
        </Zoom>
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
          disabled={page === 2}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <NavigateNextIcon />
        </IconButton>
      </Action>
    </HomeContainer>
  );
};

export default Home;
