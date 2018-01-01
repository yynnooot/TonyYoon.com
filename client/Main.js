import React, {Component} from 'react'
import Navbar from './Navbar'
import Routes from './Routes'



export default class Main extends Component {
  
  render () {
    
    return (
      <div id="whole-view">
          <Navbar />
          <Routes />
      </div>
    )
  }
}