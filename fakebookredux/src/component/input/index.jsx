import React from "react";

function Input(props) {
  return (
    <input
      onChange={props.onChange}
      vale={props.value}
      type={props.type}
      className={props.className}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
}

export default Input;
