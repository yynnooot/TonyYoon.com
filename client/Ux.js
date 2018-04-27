import React, {Component} from 'react';

import UxProject from './UxProject';

export default class Ux extends Component {
  constructor(){
    super()
    this.state = {
      heartbeat: {title:"HEARTBEAT",
                  description:"HeartBeat is an application for the Apple Watch. It is designed for patients with pre-existing heart conditions, and allows users to monitor their heart activity while recording any symptoms they may experience. The data collected can then be used by their physicians in providing best possible care.",
                  images:[{
                    original:'assets/heart1.png',
                    thumbnail:'assets/heart1.png'
                  },{
                    original:'assets/heart2.png',
                    thumbnail:'assets/heart2.png'
                  },{
                    original:'assets/heart3.png',
                    thumbnail:'assets/heart3.png'
                  },{
                    original:'assets/heart4.png',
                    thumbnail:'assets/heart4.png'
                  },{
                    original:'assets/heart5.png',
                    thumbnail:'assets/heart5.png'
                  },{
                    original:'assets/heart6.png',
                    thumbnail:'assets/heart6.png'
                  },{
                    original:'assets/heart7.png',
                    thumbnail:'assets/heart7.png'
                  }],
                  route:"/ux_heartbeat"},
      huddle: {title:"HUDDLE INSIGHTS",
                description:"Huddle Insights, a SaaS platform by Value Stream Labs, is a social data sharing platform. It allows market analysts, consultants, and researchers to join \"huddles\" and share data and insights with other members. Our team was tasked with creating wireframes for the huddle experience.",
                images:[{
                  original:'assets/huddle1.png',
                  thumbnail:'assets/huddle1.png'
                },{
                  original:'assets/huddle2.png',
                  thumbnail:'assets/huddle2.png'
                },{
                  original:'assets/huddle3.png',
                  thumbnail:'assets/huddle3.png'
                },{
                  original:'assets/huddle4.png',
                  thumbnail:'assets/huddle4.png'
                },{
                  original:'assets/huddle5.png',
                  thumbnail:'assets/huddle5.png'
                },{
                  original:'assets/huddle6.png',
                  thumbnail:'assets/huddle6.png'
                },{
                  original:'assets/huddle7.png',
                  thumbnail:'assets/huddle7.png'
                }],
                route:"/ux_huddleinsights"}
    }
  }

  render(){
    return(
      <div className="components" id="ux-container">
        <h1>UX Projects<span>.</span></h1>

        <div id="uxprocess-container" className="project-container">
          <div className="project-header">
            <h2>My UX Process</h2>
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