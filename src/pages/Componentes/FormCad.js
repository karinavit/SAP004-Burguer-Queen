import React from 'react';
import Input from './Input';
import Button from './Button';
import firebaseapp from '../fireconfig.js';
import 'firebase/auth'


function FormCad() { 
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');

    firebaseapp.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    return (
        <form>
            <p>
            <Input placeholder="Nome"/>  
            </p>
            <p>
            <Input placeholder="Email"/>  
            </p>
            <p>
            <Input type="password" placeholder="Senha"/>
            </p>
            <Input type="radio" placeholder="S"/>
            <Button btname="Cadastrar"/>
            <Button btname="Voltar"/>
        </form>
    );
  }
  
  export default FormCad;