import React from 'react';
import './radio.css';

function Radio(props) {

    return (
        <>
        <label htmlFor={props.id}>
            {props.text}
        </label>
        <input 
            className='input-radio'
            id={props.id}
            type="radio"
            placeholder={props.placeholder}
            value={props.value}
            {...props}
        />
        </>
    )}
  
  export default Radio;