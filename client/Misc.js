import React, {Component} from 'react';

export default class Misc extends Component {
  
  render(){
    return(
      <div className="components" id="misc-container">
        <h1>Miscellaneous<span>.</span></h1>
        <div id="illustration-div">
          <div className="misc-column">
            <img className="column-item" src="/assets/misc-deer.jpg" alt=""/>
            <img className="column-item" src="/assets/misc-rhino.jpg" alt=""/>
            <img className="column-item" src="/assets/misc-doge.jpg" alt=""/>
          </div>
          <div className="misc-column">
            <img className="column-item" src="/assets/misc-rhino.jpg" alt=""/>
            <img className="column-item" src="/assets/misc-doge.jpg" alt=""/>
            <img className="column-item" src="/assets/misc-deer.jpg" alt=""/>
          </div>
          <div className="misc-column">
            <img className="column-item" src="/assets/misc-deer.jpg" alt=""/>
            <img className="column-item" src="/assets/misc-doge.jpg" alt=""/>
            <img className="column-item" src="/assets/misc-rhino.jpg" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}