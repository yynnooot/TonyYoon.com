import React, {Component} from 'react'
import Navbar from './Navbar';
import Home from './Home';
import Dev from './Dev';
import Ux from './Ux';
import Misc from './Misc';
import Contact from './Contact'



export default class Main extends Component {
  
  render () {
    
    return (
      <div id="whole-view">
          <Navbar />
          <div>
            <Home />
            <Dev />
            <Ux />
            <Misc />
            <Contact />
          </div>
      </div>
    )
  }
}