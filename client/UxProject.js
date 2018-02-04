import React from 'react';
import ImageGallery from 'react-image-gallery';

const UxProject = props => 
 (
   <div className="project-container">

      <div className="project-header">
        <h2>{props.project.title}</h2>
        <p>{props.project.description}</p>
      </div>

      <ImageGallery items={props.project.images}/>

  </div>
  )

export default UxProject;
      