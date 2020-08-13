import React, { useEffect, useState } from "react";
import './card.css'
import BtnItem from '../BtnItem/BtnItem'
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
                <div className='header-card'>
                <h3 className='txt-header'>Pedido</h3>
                <h4 className='txt-header'>Cliente: {item.name}</h4>
                <h4 className='txt-header'>Nº da Mesa: {item.table}</h4>
                <h4 className='txt-header'>Atendente: {item.waiter}</h4>
                </div>
                <table cellspacing='15px'> 
                  <thead>
                  <tr>
                    <th align='center'>Qtd.</th>
                    <th align='center'>Produto</th>
                  </tr>
                  </thead>
                  <tbody>
                  {item.orders.map((product)=>(
                  <tr>
                    <td align='center'>{product.count}</td>
                    <td align='center'>{product.item}</td>
                  </tr>))}
                  </tbody>
                </table>
              </div>
              <p>{item.time}</p>
              <BtnItem>Pronto!</BtnItem>
        </div>))}
        </>
    );

  }

  export default Card;