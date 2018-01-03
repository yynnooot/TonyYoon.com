import React, { Component } from 'react'
import { Link } from 'react-router-dom';


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
                <Link to="/"><li>home</li></Link>
                <Link to="/dev"><li>dev</li></Link>
                <Link to="/ux"><li>ux</li></Link>
                <Link to="/misc"><li>misc</li></Link>
                <Link to="/contact"><li>contact</li></Link>
                
              </ul>
              <div>
                <i></i>
                <i></i>
              </div>
        </nav>  
      )
  }
}