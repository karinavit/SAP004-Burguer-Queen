import React, { useEffect, useState } from "react";
import './card.css'
import firebase from "../../../fireconfig";
import "firebase/auth";
import "firebase/firestore";



function Card() {
    const [request, setRequest] = useState();

      useEffect(() => {
        firebase
          .firestore()
          .collection('orders')
          .onSnapshot((item) => {
            const array = [];
            item.forEach((item) => array.push(item.data()));
            setRequest(array);
          });
      }, []);

    return (
      <>
      {request && request.map((item) => (
        <div className='card-pedido'>
              <div>
                <div>
                <h3>Pedido</h3>
                <h4>Cliente: {item.name}</h4>
                <h4>Nº da Mesa: {item.table}</h4>
                <h4>Atendente: {item.waiter}</h4>
                </div>
                <table>
                  <thead>
                  <tr>
                    <th>Qtd.</th>
                    <th>Produto</th>
                  </tr>
                  </thead>
                  <tbody>
                  {item.orders.map((product)=>(
                  <tr>
                    <td>{product.count}</td>
                    <td>{product.item}</td>
                  </tr>))}
                  </tbody>
                </table>
              </div>
              <p>{item.time}</p>
        </div>))}
        </>
    );

  }

  export default Card;