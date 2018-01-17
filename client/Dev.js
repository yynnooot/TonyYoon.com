import React, {Component} from 'react';

export default class Dev extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className="components" id="dev-container">
        <h1>Dev Projects<span>.</span></h1>

        <div id="codecombat-container" className="project-container">
          <div className="project-header">
            <h2>Code Combat</h2>
            <p>Our team noticed that the learning resources available to new programmers were not very engaging. So we wanted to create an application that provides a fun experience for new and seasoned programmers alike. 
  We built CodeCombat, an application where developers can improve their coding skills through solo training challenges, or live coding battles - where Users of similar rank go head-to-head and battle for points and rank. 
  </p>
            <img src="/assets/codecombat-landing.png" alt="codecombat-homepage"/>
          </div>
          <div className="project-text-img-split">
            <div className="split-left">
              <p>I was project manager and led UI Development. We used React.js and SCSS for our view, Redux for our controller, and PostgreSQL for our models. We used Ace Editor for Users to type their code, and sent the code through Sockets.io to our backend VM2 sandbox environment to safely run user submitted code.
</p>
              <a href="http://code-combat.herokuapp.com/" target="_blank"><button>View Project</button></a>
            </div>
            <img src="/assets/codecombat3.png" alt=""/>
          </div>
        </div>

        <div id="travelpedia-container" className="project-container">
          <div className="project-header">
            <h2>Travelpedia</h2>
            <p>Have you ever took photos of interesting architecture or monuments while you traveled? Travelpedia is a web app that allows users to get information about historical landmarks through images. Travelpedia utilizes Google Cloud Vision API for image recognition and Wikipedia for landmark data. This was a 4 day hackathon project I built with Node, React, Express, and CSS.</p>
            <img src="/assets/travelpedia-gug.png" alt="travelpedia-home"/>
          </div>
          <div className="project-text-img-split">
          <div className="split-left">
            <p>Here I take an image and convert it into a base-64 string which is used to make an axios post request to Google. Google response is in JSON, and I parsed the object to extract the name of the landmark. After receiving name of the landmark, I query the Wikipedia API to get summary description of the landmark. </p>
            <a href="https://github.com/yynnooot/Travelpedia" target="_blank"><button>View Code</button></a>
          </div> 
          <img src="/assets/travel-eiffel.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}