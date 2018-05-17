import React from 'react';

import {Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import Ux from './Ux.js';
import Dev from './Dev.js';
import Misc from './Misc.js';
import Contact from './Contact.js';

const Routes = () =>
  (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dev" component={Dev} />
      <Route exact path="/ux" component={Ux} />
      <Route exact path="/misc" component={Misc} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  )

export default Routes;
