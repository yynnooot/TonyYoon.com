import React, { Component } from 'react';

export default class Popup extends Component(){
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
       <div className='popup-div' style={{zIndex:'10'}}>
        <div className='popup-inner-div'>
          <h1></h1>
          
       </div>
     </div>
    )
  }
}