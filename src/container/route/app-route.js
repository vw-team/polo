// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@comp/home';

type Props = {};
type State = {};

class AppRoute extends Component<Props, State> {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default AppRoute;
