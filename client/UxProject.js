import React from 'react';

const UxProject = (props) => {
  return (
    <div className="project-container">

      <div className="project-header">
        <h2>{props.project.title}</h2>
        <p>{props.project.description}</p>
      </div>

      <div className="ux-img-container">
        <img src={props.project.image} alt={props.project.title}/>
        <div className="overlay"></div>
        <a href={props.project.route} target="_blank"><div className="ux-hero-button">View Case Study</div></a>
      </div>
        
    </div>
  )
}

export default UxProject;