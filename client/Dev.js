import React from 'react';
import DevProject from './DevProject';

import { devProjects } from '../config';

const Dev = () => (
  <div className="components" id="dev-container">
    <h1>Dev Projects<span>.</span></h1>
    
    { devProjects.map((project, idx) => <DevProject project={project} key={idx} />)}
    
  </div>
)

export default Dev;
