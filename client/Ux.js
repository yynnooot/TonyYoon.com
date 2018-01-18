import React, {Component} from 'react';

import UxProject from './UxProject';

export default class Ux extends Component {
  constructor(){
    super()
    this.state = {
      heartbeat: {title:"HeartBeat",
                  description:"HeartBeat is an application for the Apple Watch. It is designed for patients with pre-existing heart conditions, and allows users to monitor their heart activity while recording any symptoms they may experience. The data collected can then be used by their physicians in providing best possible care.",
                  image:"/assets/ux-heartbeat.png",
                  route:"/ux_heartbeat"},
      huddle: {title:"Huddle Insights",
                description:"Huddle Insights, a SaaS platform by Value Stream Labs, is a social data sharing platform. It allows market analysts, consultants, and researchers to join \"huddles\" and share data and insights with other members. Our team was tasked with creating wireframes for the huddle experience.",
                image:"/assets/huddle-page.png",
                route:"/ux_huddleinsights"}
    }
  }

  render(){
    return(
      <div className="components" id="ux-container">
        <h1>UX Projects<span>.</span></h1>

        <div id="uxprocess-container" className="project-container">
          <div className="project-header">
            <h2>My Process</h2>
            <p>My process is about gaining an understanding of the big picture, identifying goals and pain-points, and taking a User-Centered approach in designing usable solutions. The methods and techniques I use within each phase of my process may vary depending on the design challenges.</p>
            <img src="/assets/uxprocess.jpg" alt="my-ux-process"/>
          </div>
        </div>

        <UxProject project={this.state.heartbeat} />
        <UxProject project={this.state.huddle} />

      </div>

    )
  }
}