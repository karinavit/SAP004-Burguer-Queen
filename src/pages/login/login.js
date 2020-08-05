import React from 'react';
import Form from '../Componentes/Form'
import Image from '../Componentes/ImagemFundo/ImagemFundo'
import Logo from '../Componentes/Logo/Logo'
import './login.css'

function Login() {

    return (
        <>
        <div className='container'>
        <div>
        <Image />
        </div>
        <div className='logo-img'>
            <Logo />
        </div>
        <div className='box'>
        <div className="form">
        <Form />   
        </div>
        </div>
        </div>
        </>
    );
  }
  
  export default Login;