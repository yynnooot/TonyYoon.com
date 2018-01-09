import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Popup from './Popup.js';


export default class Navbar extends Component {
  constructor(){
    super()
    this.state = { 
      activeItem: 'HOME',
      showResume: false 
    }
    // this.handleItemClick = this.handleItemClick.bind(this);
    // this.toggleResume = this.toggleResume.bind(this);
  }

  // handleItemClick (event, { name }){ 
  //   const name = event.target.name;
  //   console.log("this is name: ", name)
  //   this.setState({ activeItem: name }) 
  // }

  // toggleResume(){
  //   this.setState({showResume: !this.state.showResume})
  // }

  render() {
    const activeItem = this.state.activeItem

    return (
   
        <nav id="nav">
            
              <img id="nav-logo" src="assets/tonyLogo.png" />

              <ul id="nav-links">
                <li><Link to="home-container" spy={true} smooth={true} duration={500} >home</Link></li>
                <li><Link to="dev-container" spy={true} smooth={true} duration={500}>dev</Link></li>
                <li><Link to="ux-container" spy={true} smooth={true} duration={500}>ux</Link></li>
                <li><Link to="misc-container" spy={true} smooth={true} duration={500}>misc</Link></li>
                <li><Link to="contact-container" spy={true} smooth={true} duration={500}>contact</Link></li>
              </ul>

              <div id="nav-icons">
                <a href="https://github.com/yynnooot" target="_blank"><img className="nav-icon" src="assets/icon-git.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/tonyyoon/" target="_blank"><img className="nav-icon" src="assets/icon-linkedin.png" alt=""/></a>
                <a href="/tony_yoon_resume" target="_blank"><div className="nav-icon" id="cv">cv</div></a>
              </div>

              {/* {this.state.showResume ? <Popup close={this.toggleResume}/> : null} */}

        </nav>  
      )
  }
}