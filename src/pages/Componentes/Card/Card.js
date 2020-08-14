import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './card.css'
import BtnItem from '../BtnItem/BtnItem'
import firebase from "../../../fireconfig";
import "firebase/auth";
import "firebase/firestore";



function Card() {
  //const [request, setRequest] = useState();
  let history = useHistory();
  //const [setToPrepare] = useState([]);

  useEffect((callback) => { 
    firebase
      .firestore()
      .collection("orders")
      .orderBy("date", "desc")
      .onSnapshot(function (querySnapshot) {
        let cards = [];
        querySnapshot.forEach(function (doc) {
          cards.push({ ...doc.data(), id: doc.id });
        });
        callback(cards);
      });
  },[])

  /* const compare = useEffect(() => {
        firebase
          .firestore()
          .collection('orders')
          .get().then((item) => {
            
              if (item.status === "Em preparo") {
                history.push("/cozinha")
                
              }else{
                history.push("/pedidos-prontos")
                
              }
        const compareSnap =   firebase
        .onSnapshot((item) => {
          const array = [];
          item.forEach((item) => array.push(item.data()));
          setRequest(array);
        });

          })  
      },);  */

      


    /*  essa é a função que funciona
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
 */





/*  const toDone = (e) => {
 e.preventDefault()
      firebase
          .collection('orders')
            .where('status', '==', 'Pronto')
            .onSnapshot((querySnapshot) => {
                const doc = querySnapshot.docs.map((doc) => ({
                    id: doc.id, data: doc.data()
                }));
                setToPrepare(doc)
            }) };  */
     

    

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
                <h4 className='txt-header'>Status: {item.status}</h4>
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

  

    

   