import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { ImageWrapper, Card } from './styles';
import { useLocalStorage } from '../../hooks';

const cards = Array.from(Array(16).keys());

const Puzzle = (props) => {
  const { screen } = props;
  const [openId, setOpenId] = useLocalStorage(`${screen.id || ''}-puzzle`, {});

  return (
    <React.Fragment>
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
      <ImageWrapper gridNumber={Math.floor(Math.sqrt(cards.length))}>
        <div className="wrapper">
          {cards.map((card, index) => (
            <Card
              key={index}
              onClick={() => {
                setOpenId({ ...openId, [card]: true });
              }}
              className={`lid ${openId[card] ? 'open' : ''}`.trim()}
            />
          ))}
        </div>
        <img src={`/images/${screen.src}`} alt={screen.src} />
      </ImageWrapper>
      <Typography
        align="center"
        variant="caption"
        className="description"
        color="textPrimary"
      >
        {screen.text}
      </Typography>
      <Typography
        align="center"
        variant="overline"
        className="description"
        color="textPrimary"
      >
        Go on click on the image
      </Typography>
    </React.Fragment>
  );
};

Puzzle.defaultProps = {
  screen: {
    heading: '',
    src: '',
    id: '',
    text: ''
  }
};

Puzzle.propTypes = {
  screen: PropTypes.shape({
    heading: PropTypes.string,
    src: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string
  })
};

export default Puzzle;
