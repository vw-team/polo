// @flow
import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

type Props = {};
type State = {};

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

class AppTheme extends Component<Props, State> {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    )
  }
}

export default AppTheme;
