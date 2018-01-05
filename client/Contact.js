import React, {Component} from 'react';

export default class Contact extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className="components" id="contact-container">
        <div id="contact-header">
          <h1>Thanks For Visiting!</h1>
          <img src="/assets/profile-pic.png" alt=""/>
        </div>
        
      
        <form method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="message">Message</label>
        <textarea name="message" rows="3"></textarea>

        <input type="submit" />
        </form>


      </div>

    )
  }
}