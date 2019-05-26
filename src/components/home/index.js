// flow
import React, { Component } from 'react';
import { Button } from '@material-ui/core';

import AppNav from '@comp/common/app-nav';
import HomeHeader from './home-header';
import '@scss/home/index.scss';

type Props = {};
type State = {};

class Home extends Component<Props, State> {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="home-page">
        <HomeHeader />

        <section className="scroll-wrapper">
          <p>Home Page</p>
          <p>
            <Button variant="contained">default</Button>
          </p>
          <p>
            <Button variant="contained" color="primary">运营数据</Button>
          </p>
          <p>
            <Button variant="contained" color="secondary">Secondary</Button>
          </p>
          <p>
            <small>上汽大众</small>
          </p>
          <h3>大众</h3>
          <h3>宝马</h3>
          <h3>奥迪</h3>
          <h3>保时捷</h3>
          <h3>法拉利</h3>
          <h3>阿斯顿马丁</h3>
          <h3>宾利</h3>
          <h3>丰田</h3>
          <h3>本田</h3>
          <h3>马自达</h3>
          <h3>日产</h3>
          <h3>斯柯达</h3>
          <h3>MG</h3>
          <h3>现代</h3>
        </section>

        <AppNav index={0} />
      </div>
    )
  }
}

export default Home;
