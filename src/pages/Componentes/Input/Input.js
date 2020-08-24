import React from "react";
import "./input.css";

function Input(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.text}</label>
      <input
        className="input"
        id={props.id}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        {...props}
      />
    </>
  );
}

export default Input;
