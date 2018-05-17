import React from 'react';
import UxProject from './UxProject';

import { uxProjects } from '../config';

const Ux = () =>
  (
    <div className="components" id="ux-container">
      <h1>UX Projects<span>.</span></h1>

      <div id="uxprocess-container" className="project-container">
        <div className="project-header">
          <h2>My UX Process</h2>
          <p>My process is about gaining an understanding of the big picture, identifying goals and pain-points, and taking a User-Centered approach in designing usable solutions. The methods and techniques I use within each phase of my process may vary depending on the design challenges.</p>
          <img src="/assets/uxprocess.jpg" alt="my-ux-process"/>
        </div>
      </div>

      { uxProjects.map((project, idx) => <UxProject project={project} key={idx} />)}

    </div>
  )

export default Ux;
