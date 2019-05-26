// @flow
import React, { Component } from 'react';
import AppNav from '@comp/common/app-nav';

type Props = {};
type State = {};

class Find extends Component<Props, State> {
  render() {
    return (
      <div>
        <p>发现...</p>

        <AppNav index={2} />
      </div>
    )
  }
}

export default Find;
