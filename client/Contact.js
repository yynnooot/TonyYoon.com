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
          <h1>Thanks For Visiting!</h1>
          <img src="/assets/profile-pic.png" alt=""/>
        </div>
        
      
        <form onSubmit={(event)=> this.onSubmit(event)}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" />

            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Subject:</label>
            <input type="text" name="subject" />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message"></textarea>
          </div>

          <input id="contact-submit-btn"type="submit"></input>
        </form>


      </div>

    )
  }
}