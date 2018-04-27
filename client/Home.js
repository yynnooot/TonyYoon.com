import React, {Component} from 'react';
import {Link} from 'react-scroll';
import HomeSkills from './HomeSkills'

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      front: {title: 'Front-End',
              list: ['HTML5 / CSS3', 'Javascript', 'React / React-Native', 'Redux']
      },
      back: {title: 'Back-End',
              list: ['Node', 'Express', 'PostgreSQL', 'Sequelize']
      },
      ux: {title: 'UX Design',
            list: ['Interaction Design', 'Wireframing', 'UX Research', 'Info. Architecture']
      }
    }
  }
  render(){
    return(
      <div id="home-container" className="components">
        
        <header>
          <h1>I am a New York City based <br/>Fullstack Developer &<br/>UX Designer</h1>
          <h2>I build products that solve problems, drive business, and engage users with intuitive & seamless interactions.</h2>
        </header>
        
        <div id="skills-container">
            <h1>my skills:</h1>
            <div className="skills-list">
              <HomeSkills skills={this.state.front} />
              <HomeSkills skills={this.state.back} />
              <HomeSkills skills={this.state.ux} />
            </div>
        </div>

        <Link to="dev-container" smooth={true} duration={500} ><i className="down-arrow"></i></Link>
     
      </div>

    )
  }
}