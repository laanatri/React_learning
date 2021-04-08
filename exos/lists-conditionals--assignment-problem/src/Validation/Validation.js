import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text long enough !';

  if (props.inputLength <= 5) {
    validationMessage = 'Text to short !'
  }

  return (
    <div>
      <p>{props.inputLength}</p>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;
