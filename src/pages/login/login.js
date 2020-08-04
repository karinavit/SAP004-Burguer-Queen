import React from 'react';
import Form from '../Componentes/Form'
import Image from '../Componentes/ImagemFundo/ImagemFundo'
import './login.css'

function Login() {

    return (
        <>
        <div className='container'>
        <div>
        <Image />
        </div>
        <div className="form">
        <Form />   
        </div>
        </div>
        </>
    );
  }
  
  export default Login;