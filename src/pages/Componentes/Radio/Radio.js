import React from 'react';

function Radio(props) {

    return (
        <>
        <label htmlFor={props.id}>
            {props.text}
            <input 
            className='input-radio'
            id={props.id}
            type="radio"
            placeholder={props.placeholder}
            value={props.value}
            {...props}
        />    
        </label>
        </>
    )}
  
  export default Radio;