import React from 'react';

const Resume = () => {

  const style = {
    width: '100%',
    height: '100vh'
  };
  
  return (
    <div className="resume-container">
      <embed style={style} src="assets/tony_yoon_resume.pdf#zoom=120" type="application/pdf"/>
    </div>
  )
}

export default Resume;
