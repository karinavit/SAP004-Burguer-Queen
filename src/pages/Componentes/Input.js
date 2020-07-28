import React from 'react';

function Input(props) {

    return (
        <>
        <input 
            id={props.id}
            type="text"
            placeholder={props.placeholder}
            value={props.valeu}
            {...props}
        />
        <label htmlFor={props.id}>
            {props.text}
        </label>
        </>
    )}
  
  export default Input;