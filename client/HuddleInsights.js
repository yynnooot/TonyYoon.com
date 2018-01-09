import React, { Component } from 'react';

export default class HuddleInsights extends Component {
  render(){
    const style = {
      width: '100%',
      height: '100vh'
    };
    return (
      <div id="resume-container">
        <embed style={style} src="assets/uxhuddle.pdf#zoom=75" type="application/pdf"/>
      </div>
    )
  }
}