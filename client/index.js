import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {BrowserRouter as Router} from 'react-router-dom'

import '../public/index.scss'

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app')
);