import React, { Component } from 'react';

export default class Popup extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    const style = {
      width: '90vw',
      height: '100%',
      zIndex: '100000',
      position: 'relative'
    }
    const btnStyle = {
      
    }
    return(
       <div className='popup-div component' style={style} >
        <div className='popup-inner-div'>
          <embed src="assets/tony_yoon_resume.pdf" type="application/pdf"/>
          <button onClick={()=>(this.props.close())}>CLOSE</button>
       </div>
     </div>
    )
  }
}