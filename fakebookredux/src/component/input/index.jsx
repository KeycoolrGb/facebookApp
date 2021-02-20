import React from "react";

function Input(props) {
  return (
    <input
      type="text"
      className={props.className}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
