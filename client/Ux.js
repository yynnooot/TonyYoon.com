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
        <h1>UX Projects<span>.</span></h1>
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
            <p>Huddle Insights, a SaaS platform by Value Stream Labs, is a social data sharing platform. It allows market analysts, consultants, and researchers to join "huddles" and share data and insights with other members. Our team was tasked with creating wireframes for the huddle experience.</p>
            <div className="ux-img-container" id="huddle-img-container">
              <img id="huddle-img" src="/assets/huddle-page.png" alt="huddleinsights-wireframe"/>
              <div className="overlay"></div>
              <a href="ux_huddleinsights" target="_blank"><div class="ux-hero-button">View Case Study</div></a>
            </div>

          </div>
        </div>
        <div id="heartbeat-container" className="project-container">
          <div className="project-header">
            <h2>HeartBeat</h2>
            <p>HeartBeat is an application for the Apple Watch. It is designed for patients with pre-existing heart conditions, and allows users to monitor their heart activity while recording any symptoms they may experience. The data collected can then be used by their physicians in providing best possible care.</p>
            <div className="ux-img-container" id="heartbeat-img-container">
              <img src="assets/ux-heartbeat.png" alt="my-ux-process"/>
              <div className="overlay"></div>
              <a href="/ux_heartbeat" target="_blank"><div class="ux-hero-button">View Case Study</div></a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}