import React from 'react';
import Header from './Header'
import Garcom from '../../garçom/garcom'
import './headbody.css'; 

function HeadBody() {

    return (
        <>
        <Header link1='Pedidos Prontos'/>
        
        <Garcom />
        
        </>
    );
  }
  
  export default HeadBody;