import React from 'react';
import './btnItem.css'

function BtnItem(props) {

    return (
        <button className='btn-item' onClick={props.onClick} {...props}>{props.children}</button>
    );
  }
  
  export default BtnItem;