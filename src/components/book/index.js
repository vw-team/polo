// @flow
import React, { Component } from 'react';
import AppNav from '@comp/common/app-nav';

type Props = {};
type State = {};

class Book extends Component<Props, State> {
  render() {
    return (
      <div>
        <p>小册...</p>

        <AppNav index={3} />
      </div>
    )
  }
}

export default Book;
