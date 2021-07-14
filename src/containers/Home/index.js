import React, { useEffect } from 'react';
import { Typography, Zoom, IconButton } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import Timer from '../../components/Timer';
import { get } from '../../api';
import { useLocalStorage } from '../../hooks';
import { HomeContainer, SubSection, Action } from './style';

const enableDate = '2021-07-22T18:30:00.000Z';
// const enableDate = '2021-07-15T02:30:00.000Z';
// const enableDate = '2021-07-12T18:30:00.000Z';

const randomText = [
  `Baby i know you can't wait`,
  `Why don't you come back later?`,
  `I think you are too early`,
  `Baby go now! Come later`,
  `Chance ahe illa open panna maten`,
  `Mudinja open pannu`,
  `Buju kutty wait da chlm`,
  `Really do you want to open it?`,
  `Please call customer care: 8903427534`,
];

const Home = () => {
  const [page, setPage] = useLocalStorage('home-page-no', 0);
  const enableApp = new Date().valueOf() > new Date(enableDate).valueOf();

  // useEffect(async () => {
  //   try {
  //     const response = await get(
  //       'http://worldtimeapi.org/api/timezone/asia/kolkata'
  //     );
  //     console.log('response', response);
  //   } catch (e) {
  //     console.log('error', e);
  //   }
  // }, []);

  // if (!enableApp)
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

  // return (
  //   <HomeContainer>
  //     {page === 0 && (
  //       <Zoom in>
  //         <SubSection>
  //           <Typography
  //             align="center"
  //             gutterBottom
  //             className="heading"
  //             color="textPrimary"
  //           >
  //             Hi Baby!
  //           </Typography>
  //           <Typography
  //             align="center"
  //             variant="caption"
  //             className="description"
  //             color="textPrimary"
  //           >
  //             Page 0
  //           </Typography>
  //         </SubSection>
  //       </Zoom>
  //     )}
  //     {page === 1 && (
  //       <Zoom in>
  //         <SubSection>
  //           <Typography color="textPrimary">Page 0</Typography>
  //         </SubSection>
  //       </Zoom>
  //     )}
  //     {page === 2 && (
  //       <Zoom in>
  //         <SubSection>
  //           <Typography color="textPrimary">Page 0</Typography>
  //         </SubSection>
  //       </Zoom>
  //     )}
  //     <Action>
  //       <IconButton
  //         color="secondary"
  //         aria-label="before"
  //         disabled={page === 0}
  //         onClick={() => setPage((prev) => prev - 1)}
  //       >
  //         <NavigateBeforeIcon />
  //       </IconButton>
  //       <IconButton
  //         color="secondary"
  //         aria-label="next"
  //         disabled={page === 2}
  //         onClick={() => setPage((prev) => prev + 1)}
  //       >
  //         <NavigateNextIcon />
  //       </IconButton>
  //     </Action>
  //   </HomeContainer>
  // );
};

export default Home;
