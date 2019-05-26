// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

type Props = {};
type State = {
  value: number,
};

class HomeHeader extends Component<Props, State> {
  state = {
    value: 0,
  };

  tabChange = (event, value) => {
    this.value = value;
  }

  render() {
    const { value } = this.state;
    return (
      <Tabs value={value} onChange={this.tabChange}
        variant="scrollable">
        <Tab label="首页" />
        <Tab label="JavaScript" />
        <Tab label="React" />
        <Tab label="Mobx" />
        <Tab label="Sass" />
        <Tab label="TypeScript" />
        <Tab label="Flow" />
      </Tabs>
    )
  }
}

export default withRouter(HomeHeader);
