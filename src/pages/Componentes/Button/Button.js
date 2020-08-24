import React from 'react';
import './button.css'

function Button(props) {

    return (
        <button className='btn-start' onClick={props.onClick} {...props}>{props.children}</button>
    );
  }
  
  export default Button;