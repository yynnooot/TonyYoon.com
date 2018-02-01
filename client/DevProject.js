import React from 'react';

const DevProject = props => 
 (
  <div className="project-container">

    <div className="project-header">
      <h2>{props.project.title}</h2>
      <p>{props.project.description}</p>
      <img src={props.project.images[0]} alt={props.project.title}/>
    </div>

    <div className="project-text-img-split">
      <div className="split-left">
        <p>{props.project.body}</p>
      </div>
      <img src={props.project.images[1]} alt={props.project.title} />
    </div>
    <div>
      <a href={props.project.route} target="_blank"><button className="dev-btn">View Project</button></a>
    </div>

  </div>
  )


export default DevProject;