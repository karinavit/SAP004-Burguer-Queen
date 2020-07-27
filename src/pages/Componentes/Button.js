import React from 'react';

function Button(props) {

    return (
        <button onClick={props.onClick}>{props.btname}</button>
    );
  }
  
  export default Button;