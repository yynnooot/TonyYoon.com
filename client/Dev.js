import React, { Component } from 'react';
import DevProject from './DevProject';

export default class Dev extends Component {
  constructor() {
    super()
    this.state = {
      codecombat: {
        title:"Code Combat",
        description:'Our team noticed that the learning resources available to new programmers were not very engaging. So we wanted to create an application that provides a fun experience for new and seasoned programmers alike. We built CodeCombat, an application where developers can improve their coding skills through solo training challenges, or live coding battles - where Users of similar rank go head-to-head and battle for points and rank.',
        images:[
          '/assets/codecombat-landing.png',
          '/assets/codecombat3.png'
        ],
        body: "I was project manager and led UI Development. We used React.js, SCSS, Redux and PostgreSQL for our models. For Users to type their code, we used Ace Editor and sent the code through Sockets.io to our backend Sandbox environment (VM2) to safely run user submitted code.",
        route:"http://code-combat.herokuapp.com/"
      },

      travelpedia: {
        title:"Travelpedia",
        description:"Travelpedia is a web app that allows users to get information about historical landmarks and architecture through images. Travelpedia utilizes Google Cloud Vision API for image recognition and Wikipedia for landmark data. This was a 4 day hackathon project I built with Node, React, Express, and CSS.",
        images:[
          '/assets/travelpedia-gug.png',
          '/assets/travel-eiffel.png'
        ],
        body:"Here I take an image and convert it into a base-64 string which is used to make an axios post request to Google. Google response is in JSON, and I parsed the object to extract the name of the landmark. After receiving name of the landmark, I query the Wikipedia API to get summary description of the landmark.",
        route:"https://github.com/yynnooot/Travelpedia"
      }
    }
  }
  
  render() {
    return (

      <div className="components" id="dev-container">
        <h1>Dev Projects<span>.</span></h1>

        <DevProject project={this.state.codecombat}/>
        <DevProject project={this.state.travelpedia}/>

      </div>
    )
  }
}
