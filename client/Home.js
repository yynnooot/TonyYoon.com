import React, {Component} from 'react';

export default class Home extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div id="home-container" className="components">
        <h1>Hi, I am an NYC based Fullstack Developer and UX Designer</h1>
        <h3>I love to make complex things more simple. I believe that truly great products should solve problems, drive business, and engage users with intuitive & seamless interactions.</h3>
        
        <div id="home-features">
          <div>
            <h2>Skills</h2>
            <h3>Front-End</h3>
            <ul>
              <li>HTML5 / CSS3</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
            <h3>Back-End</h3>
              <ul>

                <li>Node</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
              </ul>
            <h3>User Experience</h3>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                
              </ul>
            
          </div>
          <div>
            <h2>Education</h2>
            <p>ask jdflkasd fklhas kdfjh aksdjhfk; ashjdfakshdf ashjdf asjhdf;a sdfh;a sd</p>
          </div>
          
        </div>
      </div>

    )
  }
}