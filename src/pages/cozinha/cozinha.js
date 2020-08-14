import React from "react";
import './cozinha.css'; 
import Header from '../Componentes/Header/Header'
import Card from '../Componentes/Card/Card'

function Garcom(){

    return (
        <>
        <Header link1='Pedidos Prontos' />
        <div className='card-cozinha'>
        <Card status= "Em preparo" status2="Pronto" />
        </div>
        </>
    )}
  
  export default Garcom;