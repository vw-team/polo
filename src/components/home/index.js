// flow
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

type Props = {};
type State = {};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F50057',
    },
    secondary: {
      main: '#2962FF',
    },
  },
});

class Home extends Component<Props, State> {
  render() {
    return (
      // <ThemeProvider theme={theme}>
        <div>
          <p>Home Page</p>
          <p>
            <Button variant="contained">default</Button>
          </p>
          <p>
            <Button variant="contained" color="primary">运营数据</Button>
          </p>
          <p>
            <Button variant="contained" color="secondary">Secondary</Button>
          </p>
          <p>
            <small>上汽大众</small>
          </p>
        </div>
      // </ThemeProvider>
    )
  }
}

export default Home;
