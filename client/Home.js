import React from 'react';
import {Link} from 'react-scroll';
import HomeSkills from './HomeSkills';

import { skills } from '../config';

const Home = () =>
  (
    <div id="home-container" className="components">
      
      <header>
        <h1>I am a New York City based <br/>Fullstack Developer &<br/>UX Designer</h1>
        <h2>I build products that solve problems, drive business, and engage users with intuitive & seamless interactions.</h2>
      </header>
      
      <div id="skills-container">
          <h1>my skills:</h1>
          <div className="skills-list">
            { skills.map((skill, idx) => <HomeSkills key={idx} skills={skill} />)}
          </div>
      </div>

      <Link to="dev-container" smooth={true} duration={500} ><i className="down-arrow"></i></Link>
    
    </div>
  )

export default Home;
