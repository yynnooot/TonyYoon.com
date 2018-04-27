import React, { Component } from 'react';
import DevProject from './DevProject';

export default class Dev extends Component {
  constructor() {
    super()
    this.state = {
      travelpedia: {
        title:"Travelpedia",
        description:"Travelpedia is a mobile app built with React-Native, Redux, and Expo. It allows users to get information about historical landmarks and architecture through images they take or have stored on their smart phones. Travelpedia utilizes Google Cloud Vision API for image recognition and Wikipedia to retrieve insightful information about the landmark.",
        images:[
          '/assets/travel_mobile.png',
          '/assets/travel-eiffel.png'
        ],
        body:"How it works: I use Expo's built-in asynchronous functions to obtain a Base-64 string from an image. I then send the base-64 to Google Cloud Vision API in a Post request using axios - if image recognition is successful, Google responds with a JSON object which I parse to obtain the title of the landmark within the image. After receiving name of the landmark, I query the Wikipedia API to get summary description of the landmark. I also built a simpler web application where Users can choose images from their computer. This was built with Node, Express, React, and SCSS.",
        route:"https://github.com/yynnooot/TravelpediaMobile"
      },
      codecombat: {
        title:"Code Combat",
        description:'Our team noticed that the learning resources available to new programmers were not very engaging. So we wanted to create an application that provides a fun experience for new and seasoned programmers alike. We built CodeCombat, an application where developers can improve their coding skills through solo training challenges, or live coding battles - where Users of similar rank go head-to-head and battle for points and rank.',
        images:[
          '/assets/codecombat-landing.png',
          '/assets/codecombat3.png'
        ],
        body: "I served as project manager and led UI Development. We utitlized such technologies as React, Redux, Node, Express and PostgreSQL for our database. For Users to type their code, we used Ace Editor, and sent the user-submitted code to our back-end through websockets (Sockets.io). In order to safely run user-submitted code, we utilized VM2 to create a virtual sandbox environment.",
        route:"http://code-combat.herokuapp.com/"
      }
    }
  }
  
  render() {
    return (
      <div className="components" id="dev-container">
        <h1>Dev Projects<span>.</span></h1>
        <DevProject project={this.state.travelpedia}/>
        <DevProject project={this.state.codecombat}/>
      </div>
    )
  }
}
