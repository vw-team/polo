// @flow
import React, { Component } from 'react';
import { Paper, Button, AppBar, Tabs, Tab } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDown from '@material-ui/icons/ThumbDown';
import { makeStyles } from '@material-ui/styles';

type Props = {};
type State = {
  value: number,
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

class AppNav extends Component<Props, State> {
  state = {
    value: 0,
  };

  tabChange = (event, value) => {
    console.log('event: ', event, value);
    this.setState({
      value: value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <Paper square className={useStyles.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.tabChange}
            variant="fullWidth" indicatorColor="primary">
            <Tab icon={<PhoneIcon style={{fontSize:20}} />} aria-label="Phone" />
            <Tab icon={<ThumbDown style={{fontSize:20}} />} aria-label="ThumbDown" />
            <Tab icon={<PersonPinIcon style={{fontSize:20}} />} aria-label="PersonPinIcon" />
            <Tab icon={<FavoriteIcon style={{fontSize:20}} />} aria-label="FavoriteIcon" />
          </Tabs>
        </AppBar>
      </Paper>
    )
  }
}

export default AppNav;
