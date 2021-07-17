import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle
} from 'styled-components';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';
import HappyBirthday from '../HappyBirthday';

const createAppTheme = (type) =>
  createTheme({
    palette: {
      type,
      primary: blue,
      secondary: orange
    }
  });

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({
      theme: {
        palette: {
          background: { default: d }
        }
      }
    }) => d};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }
  main#root {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 300000,
      cacheTime: 300000
    }
  }
});

const App = () => {
  const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  return (
    <ThemeProvider theme={createAppTheme(mode)}>
      <QueryClientProvider client={queryClient}>
        <StyledThemeProvider theme={createAppTheme(mode)}>
          <BrowserRouter>
            <HappyBirthday />
          </BrowserRouter>
          <GlobalStyle />
        </StyledThemeProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
