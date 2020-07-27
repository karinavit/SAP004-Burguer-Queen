import React from 'react';
import Input from './Input';
import Button from './Button';

/* function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('O link foi clicado.');
    } */

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
            {/* <a href="#" onClick={handleClick}>
                Cadastre-se
            </a> */}
        </form>
    );
  }
  
  export default Form;