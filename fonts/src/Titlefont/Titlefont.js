import React from 'react';

import './Titlefont.css';


const titlefont  = (props) => {
  // return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old !</p>
  return (
    <div className="Titlefont">
      <h2>{props.name}</h2>
    </div>
  )
};

export default titlefont;
