import React from "react";

const validation = props => {
  let validationText = "Text long enough";

  if (props.length <= 5) {
    validationText = "Text too short";
  }

  return (
    <div>
      <p>{validationText}</p>
    </div>
  );
};

export default validation;
