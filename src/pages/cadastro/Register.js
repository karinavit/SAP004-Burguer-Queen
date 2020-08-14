import React from 'react';
import FormCad from '../Componentes/FormCad/FormCad'
import Logo from '../Componentes/LogoInicio/Logo'
import '../login/login'

function Register() {

    return (
        <>
        <div className='container'>
        
        <div className='logo-img'>
            <Logo />
        </div>
        <div className='form box'>
        <FormCad />   
        </div>
        </div>
        </>
    );
  }
  
  export default Register;