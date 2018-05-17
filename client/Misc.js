import React from 'react';

const Misc = () =>
  (
    <div className="components" id="misc-container">
      <h1>Miscellaneous<span>.</span></h1>
      <div id="illustration-div">
        <div className="misc-column">
          <img className="column-item" src="/assets/misc-deer.jpg" alt=""/>
          <img className="column-item" src="/assets/misc-doge.jpg" alt=""/>
          
        </div>
        <div className="misc-column">
          <img className="column-item" src="/assets/misc-skullblock.jpg" alt=""/>
          <img className="column-item" src="/assets/misc-skull.jpg" alt=""/>
          
        </div>
        <div className="misc-column">
          <img className="column-item" src="/assets/misc-bernie.jpg" alt=""/>
          <img className="column-item" src="/assets/misc-rhino.jpg" alt=""/>
        </div>
      </div>
    </div>
  )

export default Misc;
