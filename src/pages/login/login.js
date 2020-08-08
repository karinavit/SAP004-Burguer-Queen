import React from 'react';
import Form from '../Componentes/Form'
import Logo from '../Componentes/LogoInicio/Logo'
import './login.css'

function Login() {
   // const [cadastro, setCadastro] = React.useState('')

    return (
        <>
        <div className='container'>
        
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