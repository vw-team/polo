// @flow
import React, { Component } from 'react';
import AppNav from '@comp/common/app-nav';

type Props = {};
type State = {};

class Pin extends Component<Props, State> {

  componentDidMount() {
    console.log('come in pin...');
  }

  render() {
    return (
      <div>
        <p>沸点...</p>

        <AppNav index={1} />
      </div>
    )
  }
}

export default Pin;
