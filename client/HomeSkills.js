import React from 'react';

const HomeSkills = props =>
  (
    <div className="homeskills">
        <h2>{props.skills.title}</h2>
        <ul className="fade">
          {props.skills.list.map((item,index) => {
            return (
              <li key={index}>{item}</li>
            )
          })}
        </ul>
      </div>    
  )


export default HomeSkills;