import React, { Component } from 'react';

export default class HeartBeat extends Component {
  render(){
    const style = {
      width: '100%',
      height: '100vh'
    };
    return (
      <div className="resume-container">
        <embed style={style} src="assets/uxheartbeat.pdf#zoom=75" type="application/pdf"/>
      </div>
    )
  }
}