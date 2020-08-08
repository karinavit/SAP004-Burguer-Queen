import React from 'react';
import Header from './Header'
import Garcom from '../../garçom/garcom'
import './headbody.css'; 

function HeadBody() {

    return (
        <>
        <Header link1='Pedidos Prontos' link2='Novo Pedido'/>
        
        <Garcom />
        
        </>
    );
  }
  
  export default HeadBody;