import React from "react";
import './cozinha.css'; 
import Header from '../Componentes/Header/Header'
import Card from '../Componentes/Card/Card'

function Garcom(){

    return (
        <>
        <Header link1='Pedidos Prontos' />
        <div className='card-cozinha'>
        <Card />
        </div>
        </>
    )}
  
  export default Garcom;