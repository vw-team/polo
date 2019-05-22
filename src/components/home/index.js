// flow
import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import AppNav from '@comp/common/app-nav';

type Props = {};
type State = {};

class Home extends Component<Props, State> {
  render() {
    return (
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

        <AppNav />
      </div>
    )
  }
}

export default Home;
