import React, { useEffect, useState } from "react";
import "./card.css";
import BtnItem from "../BtnItem/BtnItem";
import firebase from "../../../fireconfig";
import "firebase/auth";
import "firebase/firestore";
import {MdTimer, MdTimerOff} from 'react-icons/md'

function Card(props) {
  const [request, setRequest] = useState();
 

  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .onSnapshot(function (item) {
        let cards = [];
        item.forEach(function (item) {
          cards.push({ ...item.data(), id: item.id });
          
        });
        console.log(cards)
        const filterCard = cards.filter((orders) => {
          
          return orders.status === props.status
          
        });
        
        setRequest(filterCard);
      });
  },[]); // eslint-disable-line

  

  const toDone = (e, item) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("orders")
      .doc(item.id)
      .update({ status: props.status2, timeend:new Date().toLocaleTimeString('pt-BR')})
      .then(() => {
             
      });
  };

  return (
    <>
      {request &&
        request.map((item) => (
          <div className="card-pedido">
            <div>
              <div className="header-card">
                <h3 className="txt-header">Pedido</h3>
                <h4 className="txt-header">Cliente: {item.name}</h4>
                <h4 className="txt-header">Nº da Mesa: {item.table}</h4>
                <h4 className="txt-header">Atendente: {item.waiter}</h4>
                <h4 className="txt-header">Status: {item.status}</h4>
              </div>
              <table cellspacing="15px">
                <thead>
                  <tr>
                    <th align="center">Qtd.</th>
                    <th align="center">Produto</th>
                  </tr>
                </thead>
                <tbody>
                  {item.orders.map((product) => (
                    <tr>
                      <td align="center">{product.count}</td>
                      <td align="center">{product.item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p><MdTimer />{item.time}</p>
            <p><MdTimerOff />{item.timeend}</p>

            <BtnItem onClick={(e) => toDone(e, item)}>Pronto!</BtnItem>
          </div>
        ))}
    </>
  );
}

export default Card;

