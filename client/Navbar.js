import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const Navbar = () => (
  <nav id="nav">
    <img className="nav-logo" src="assets/tonyLogo.png" />

    <ul id="nav-links">
      <li><Link to="home-container" activeClass="active" spy={true} smooth={true} duration={500} >home</Link></li>
      <li><Link to="dev-container" activeClass="active" spy={true} smooth={true} duration={500}>dev</Link></li>
      <li><Link to="ux-container" activeClass="active" spy={true} smooth={true} duration={500}>ux</Link></li>
      <li><Link to="misc-container" activeClass="active" spy={true} smooth={true} duration={500}>misc</Link></li>
      <li><Link to="contact-container"  activeClass="active" spy={true} smooth={true} duration={500}>contact</Link></li>
    </ul>

    <div className="nav-icons">
      <a href="https://github.com/yynnooot" target="_blank"><img className="nav-icon" src="assets/icon-git.png" alt=""/></a>
      <a href="https://www.linkedin.com/in/tonyyoon/" target="_blank"><img className="nav-icon" src="assets/icon-linkedin.png" alt=""/></a>
      <a href="/tony_yoon_resume" target="_blank"><div className="nav-icon" id="cv">cv</div></a>
    </div>
  </nav>  
)

export default Navbar;
