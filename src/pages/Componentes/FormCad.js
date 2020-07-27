import React from 'react';
import Input from './Input';
import Button from './Button';


function FormCad() { 

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
            <Button btname="Cadastrar"/>
            <Button btname="Voltar"/>
        </form>
    );
  }
  
  export default FormCad;