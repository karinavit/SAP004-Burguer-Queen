import React from "react";
import './garcom.css'; 
import Header from '../Componentes/Header/Header'
import ProductsContainer from '../Componentes/ProductsContainer/ProductsContainer'

function Garcom(){

    return (
        <>
        <Header link1="Pedidos Prontos" link2="Histórico" />
        <ProductsContainer />
        </>
    )}
  
  export default Garcom;

