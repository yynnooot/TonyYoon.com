import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

import Main from './Main';
import Resume from './Resume';
import HeartBeat from './HeartBeat';
import HuddleInsights from './HuddleInsights';

import '../public/index.scss'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/tony_yoon_resume" component={Resume}/>
      <Route path="/ux_huddleinsights" component={HuddleInsights}/>
      <Route path="/ux_heartbeat" component={HeartBeat}/>

    </div>
  </BrowserRouter>,
  document.getElementById('app')
);