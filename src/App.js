import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import AppRoute from '@route/app-route';
import '@commonScss/index.scss';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#F50057',
    },
    secondary: {
      main: '#2962FF',
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
      'Helvetica',
      'Helvetica Neue',
      'Verdana',
    ],
    fontSize: '1rem',
    fontWeightRegular: 500,
    fontWeightMedium: 500,
    fontWeightLight: 500,
    useNextVariants: true,
    button: {
      fontSize: '1.3rem',
    }
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'capitalize',
      },
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppRoute />
      </MuiThemeProvider>
    )
  }
}

export default App;
