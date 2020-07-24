import React from 'react';
import Input from './Input';
import Button from './Button';

function Form() {

    return (
        <form>
            <p>
            <Input placeholder="Email"/>  
            </p>
            <p>
            <Input type="password" placeholder="Senha"/>
            </p>
            <Button btname="LogIn"/>
        </form>
    );
  }
  
  export default Form;