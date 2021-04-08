import React from 'react';

import './Btnfont.css';


const btnfont  = (props) => {
  // return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old !</p>
  return (
    <button className="Btnfont">
        <p>{props.name}</p>
    </button>
  )
};

export default btnfont;
