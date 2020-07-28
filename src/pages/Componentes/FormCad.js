import React from 'react';
import Input from './Input';
import Button from './Button';
import firebaseapp from '../../fireconfig.js';
import 'firebase/auth'


function FormCad() { 
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState(''); 

    
     const cadastro = (e) => {
      e.preventDefault()
        firebaseapp.auth().createUserWithEmailAndPassword(email, pass).then(user => {
          console.log(user)
          //.catch(function(error) {
        // Handle Errors here.
        //var errorCode = error.code;
        //var errorMessage = error.message;
        //})
       });
      }

    return (
      <>
        <form>
            <p>
            <Input placeholder="Nome"/>  
            </p>
            <p>
            <Input placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)}/>  
            </p>
            <p>
            <Input type="password" placeholder="Senha" value={pass} onChange={e=> setPass(e.target.value)}/>
            </p>
            <p>
            <Input type="radio" text="Salão"/>
            </p>
            <p>
            <Input type="radio" text="Cozinha"/>
            </p>
            <Button onClick={e=> cadastro(e)} btname="Cadastrar"/>
            <Button btname="Voltar"/>
        </form>
      </>
    );
  }
  
  export default FormCad;