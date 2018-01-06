import React, { Component } from 'react'
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class Navbar extends Component {
  constructor(){
    super()
    this.state = { 
      activeItem: 'HOME' 
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick (event, { name }){ 
    // const name = event.target.name;
    console.log("this is name: ", name)
    this.setState({ activeItem: name }) 
  }

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
                <img src="assets/icon-git.png" alt=""/>
                <img src="assets/icon-linkedin.png" alt=""/>
              </div>
        </nav>  
      )
  }
}