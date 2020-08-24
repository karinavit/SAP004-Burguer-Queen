import React from "react";
import "./btnItem.css";

function BtnItem(props) {
  return (
    <button
      className="btn-item"
      name={props.name}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default BtnItem;
