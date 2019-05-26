// @flow
import React, { Component } from 'react';
import AppNav from '@comp/common/app-nav';

type Props = {};
type State = {};

class My extends Component<Props, State> {
  render() {
    return (
      <div>
        <p>我的..</p>

        <AppNav index={4} />
      </div>
    )
  }
}

export default My;
