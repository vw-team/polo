// @flow
import React, { Component } from 'react';

import AppTheme from '@route/app-theme';
import AppRoute from '@route/app-route';
import '@commonScss/index.scss';

class App extends Component {
  render() {
    return (
      <AppTheme>
        <AppRoute />
      </AppTheme>
    )
  }
}

export default App;
