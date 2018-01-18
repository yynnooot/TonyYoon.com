import React from 'react';

const HomeSkills = (props)=>{
  return (
    <div className="homeskills">
        <h2>{props.skills.title}</h2>
        <ul>
          {props.skills.list.map((item,index) => {
            return (
              <li key={index}>{item}</li>
            )
          })}
        </ul>
      </div>    
  )
}

export default HomeSkills;