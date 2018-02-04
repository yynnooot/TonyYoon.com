import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

import Main from './Main';
import Resume from './Resume';

import '../public/index.scss'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/tony_yoon_resume" component={Resume}/>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);