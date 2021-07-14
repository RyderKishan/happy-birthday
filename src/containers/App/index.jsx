import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';
import HappyBirthday from '../HappyBirthday';

const createAppTheme = (type) =>
createTheme({
    palette: {
      type,
      primary: blue,
      secondary: orange,
    },
  });

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({
      theme: {
        palette: {
          background: { default: d },
        },
      },
    }) => d};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }
  main#root {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

const App = () => {
  const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  return (
    <ThemeProvider theme={createAppTheme(mode)}>
      <StyledThemeProvider theme={createAppTheme(mode)}>
        <BrowserRouter>
          <HappyBirthday />
        </BrowserRouter>
        <GlobalStyle />
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

export default App;
