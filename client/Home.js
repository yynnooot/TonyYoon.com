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
        <header>
          <h1>I am a New York City based <br/><span id="header-underline">Fullstack Developer &<br/>UX Designer</span></h1>
          <h2>I build products that solve problems, drive business, and engage users with intuitive & seamless interactions.</h2>
        </header>
        
        <div id="home-features">
          <div id="skills-container">
            <h1>my skills:</h1>
            <div id="skills-list-container">
              <div>
                <h2>Front-End</h2>
                <ul>
                  <li>HTML5 / CSS3</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Redux</li>
                </ul>
              </div>
              <div>
                <h2>Back-End</h2>
                <ul>
                  <li>Node</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>Sequelize</li>
                </ul>
              </div>
              <div>
                <h2>User Experience</h2>
                <ul>
                  <li>Interaction Design</li>
                  <li>User Research</li>
                  <li>Wireframing</li>
                  <li>Information Architecture</li> 
                </ul>
              </div>
              {/* <div id="home-cta">
                <button>hire Tony</button>
              </div> */}
            </div>
          </div>
          
        </div>
      </div>

    )
  }
}