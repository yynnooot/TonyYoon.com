import React, {Component} from 'react';

export default class Ux extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className="components" id="ux-container">
        <h1>UX Projects</h1>
        <div id="uxprocess-container" className="project-container">
          <div className="project-header">
            <h2>My Process</h2>
            <p>My process is about gaining an understanding of the big picture, identifying goals and pain-points, and taking a User-Centered approach in designing usable solutions. The methods and techniques I use within each phase of my process may vary depending on the design challenges.</p>
            <img src="/assets/uxprocess.jpg" alt="my-ux-process"/>
          </div>
        </div>
        <div id="huddleinsights-container" className="project-container">
          <div className="project-header">
            <h2>Huddle Insights</h2>
            <p>My process is about gaining an understanding of the big picture, identifying goals and pain-points, and taking a User-Centered approach in designing usable solutions. The methods and techniques I use within each phase of my process may vary depending on the design challenges.</p>
            <img id="huddle-img" src="/assets/huddle-page.png" alt="huddleinsights-wireframe"/>
          </div>
        </div>
        <div id="heartbeat-container" className="project-container">
          <div className="project-header">
            <h2>HeartBeat</h2>
            <p>My process is about gaining an understanding of the big picture, identifying goals and pain-points, and taking a User-Centered approach in designing usable solutions. The methods and techniques I use within each phase of my process may vary depending on the design challenges.</p>
            <img src="" alt="my-ux-process"/>
          </div>
        </div>
      </div>

    )
  }
}