import React from 'react';
import Form from '../Componentes/Form'
import Image from '../Componentes/ImagemFundo/ImagemFundo'
import Logo from '../Componentes/Logo/Logo'
import './login.css'

function Login() {
   // const [cadastro, setCadastro] = React.useState('')

    return (
        <>
        <div className='container'>
        <div>
        <Image />
        </div>
        <div className='logo-img'>
            <Logo />
        </div>
        <div className='form box'>
        <Form />   
        </div>
        </div>
        </>
    );
  }
  
  export default Login;