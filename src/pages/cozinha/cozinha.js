import React from "react";
import "./cozinha.css";
import Header from "../Componentes/Header/Header";
import Card from "../Componentes/Card/Card";

function Cozinha() {
  return (
    <>
      <Header link1="Pedidos Prontos" link2="Histórico" />
      <div className="card-cozinha">
        <Card status="Em preparo" status2="Pronto" />
      </div>
    </>
  );
}

export default Cozinha;
