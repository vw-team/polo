// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Paper, Button, AppBar, Tabs, Tab } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';

import Home from '@comp/home';
import Pin from '@comp/pin';
import Find from '@comp/find';
import Book from '@comp/book';
import My from '@comp/my';

type Props = {
  index: number,
};
type State = {
  value: number,
};

class AppNav extends Component<Props, State> {
  state = {
    value: 0,
  };

  tabChange = (event: any, value: number) => {
    switch(value) {
      case 0:
        this.props.history.push('/');
        break;
      case 1:
        this.props.history.push('/pin');
        break;
      case 2:
        this.props.history.push('/find');
        break;
      case 3:
        this.props.history.push('/book');
        break;
      case 4:
        this.props.history.push('/my');
        break;
    }
  }

  render() {
    const { index } = this.props;
    return (
      <Paper>
        <AppBar>
          <Tabs value={index} onChange={this.tabChange}
            variant="fullWidth" indicatorColor="primary">
            <Tab icon={<PhoneIcon style={{fontSize:20}} />} aria-label="Phone" />
            <Tab icon={<ThumbDown style={{fontSize:20}} />} aria-label="ThumbDown" />
            <Tab icon={<PersonPinIcon style={{fontSize:20}} />} aria-label="PersonPinIcon" />
            <Tab icon={<FavoriteIcon style={{fontSize:20}} />} aria-label="FavoriteIcon" />
            <Tab icon={<ThumbUp style={{fontSize:20}} />} aria-label="ThumbUp" />
          </Tabs>
        </AppBar>
      </Paper>
    )
  }
}

export default withRouter(AppNav);
