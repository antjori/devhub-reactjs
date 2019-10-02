import React from "react";

import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>Hi from paragraph number one with username {props.username}</p>
      <p>Hi from paragraph number two with username {props.username}</p>
    </div>
  );
};

export default userOutput;
