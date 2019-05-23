// @flow
import React, { Component } from 'react';

import AppTheme from '@route/app-theme';
import AppRoute from '@route/app-route';
import '@commonScss/index.scss';

type Props = {};
type State = {};

class App extends Component<Props, State> {
  render() {
    return (
      <AppTheme>
        <AppRoute />
      </AppTheme>
    )
  }
}

export default App;
