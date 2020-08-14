import React from "react";
import { Link } from "react-router-dom";
import Header from "./Componentes/Header/Header";
import Card from "./Componentes/Card/Card";
import Button from "./Componentes/Button/Button";

function PedPronto() {
  return (
    <>
      <Header link1="Pedidos Prontos" link2="Histórico" />
      <Button>
        <Link to="./garcom">Voltar</Link>
      </Button>
      <div>
        <Card status="Pronto" status2="Entregue" />
      </div>
    </>
  );
}

export default PedPronto;
