// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@comp/home';
import Pin from '@comp/pin';
import Find from '@comp/find';
import Book from '@comp/book';
import My from '@comp/my';
import Event from '@comp/event';
import Setting from '@comp/setting';
import Page404 from '@comp/public/page404';

type Props = {};
type State = {};

class AppRoute extends Component<Props, State> {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pin" component={Pin} />
          <Route exact path="/find" component={Find} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/my" component={My} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/setting" component={Setting} />
          <Route component={Page404} />
        </Switch>
      </Router>
    )
  }
}

export default AppRoute;
