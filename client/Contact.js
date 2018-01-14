import React, {Component} from 'react';
import axios from 'axios';

export default class Contact extends Component {
  constructor(){
    super()
    this.state = {

    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    axios.post('/', { name, email, subject, message})
    .then((result) => {
      console.log('after axios: result => ', result)
    })
  }

  render(){
    return(
      <div className="components" id="contact-container">
        <div id="contact-header">
          <h1>Thanks For Visiting<span>!</span></h1>
          <h3>Interested in working together? Message me and tell me about your team/project!</h3>
          {/* <img src="/assets/profile-pic.png" alt=""/> */}
        </div>
        

        <form onSubmit={(event)=> this.onSubmit(event)} id="form">
          <div className="form-line">
            <label>Name:</label>
            <input type="text" name="name" required/>
          </div>
            
          <div className="form-line">
            <label>Email:</label>
            <input type="email" name="email" required/>
          </div>
            
          <div className="form-line">
            <label>Subject:</label>
            <input type="text" name="subject" required/>
          </div>
          
          <div className="form-line">
            <label>Message:</label>
            <textarea name="message" required></textarea>
          </div>

          <input id="contact-submit-btn" type="submit"></input>
        </form>
      </div>

    )
  }
}