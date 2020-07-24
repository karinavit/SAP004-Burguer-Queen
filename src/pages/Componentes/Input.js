import React from 'react';

function Input(props) {

    return (
        <>
        <label htmlFor={props.id}>
            {props.text}
        </label>
            <input 
                id={props.id}
                type="text"
                placeholder={props.placeholder}
                {...props}
            />
        </>
    )}
  
  export default Input;