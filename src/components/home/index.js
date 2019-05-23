// flow
import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import AppNav from '@comp/common/app-nav';

import '@scss/home/index.scss';

type Props = {};
type State = {};

class Home extends Component<Props, State> {
  render() {
    return (
      <div className="home-page">
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
        <p>
          <small>一汽大众</small>
        </p>
        <p>
          <small>一汽奥迪</small>
        </p>
        <p>
          <small>一汽马自达</small>
        </p>
        <p>
          <small>长安马自达</small>
        </p>
        <p>
          <small>华晨宝马</small>
        </p>
        <p>
          <small>保时捷</small>
        </p>
        <p>
          <small>大众</small>
        </p>
        <p>
          <small>奥迪</small>
        </p>
        <p>
          <small>宝马</small>
        </p>
        <p>
          <small>马自达</small>
        </p>
        <p>
          <small>本田</small>
        </p>
        <p>
          <small>丰田</small>
        </p>
        <p>
          <small>斯巴鲁</small>
        </p>
        <p>
          <small>别克</small>
        </p>
        <p>
          <small>凯迪拉克</small>
        </p>
        <p>
          <small>日产 Nissan</small>
        </p>
        <p>
          <small>起亚</small>
        </p>
        <p>
          <small>现代</small>
        </p>
        <p>
          <small>荣威</small>
        </p>
        <p>
          <small>MG</small>
        </p>
        <p>
          <small>斯柯达</small>
        </p>
        <p>
          <small>三菱</small>
        </p>
        <p>
          <small>特斯拉</small>
        </p>
        <p>
          <small>林肯</small>
        </p>
        <p>
          <small>沃尔沃</small>
        </p>
        <p>
          <small>雪佛兰</small>
        </p>
        <p>
          <small>英菲尼迪</small>
        </p>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>GraphQL</li>
          <li>Material-UI</li>
        </ul>
        <p>
          <label>顺丰快递</label>
        </p>

        <AppNav />
      </div>
    )
  }
}

export default Home;
