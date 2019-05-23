// @flow
import React, { Component } from 'react';
import { Button, AppBar, Tabs, Tab } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDown from '@material-ui/icons/ThumbDown';

import Home from '@comp/home';
import Find from '@comp/find';

type Props = {};
type State = {
  value: number,
};

class AppNav extends Component<Props, State> {
  state = {
    value: 0,
  };

  tabChange = (event: any, value: number) => {
    this.setState({
      value: value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <AppBar>
        <Tabs value={value} onChange={this.tabChange}
          variant="fullWidth" indicatorColor="primary">
          <Tab icon={<PhoneIcon style={{fontSize:20}} />} aria-label="Phone" />
          <Tab icon={<ThumbDown style={{fontSize:20}} />} aria-label="ThumbDown" />
          <Tab icon={<PersonPinIcon style={{fontSize:20}} />} aria-label="PersonPinIcon" />
          <Tab icon={<FavoriteIcon style={{fontSize:20}} />} aria-label="FavoriteIcon" />
        </Tabs>
      </AppBar>
    )
  }
}

export default AppNav;
