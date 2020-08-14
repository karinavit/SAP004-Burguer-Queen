import React, { useEffect, useState } from "react";
import './card.css'
import BtnItem from '../BtnItem/BtnItem'
import firebase from "../../../fireconfig";
import "firebase/auth";
import "firebase/firestore";



function Card() {
  const [request, setRequest] = useState();
  //const [setToPrepare] = useState([]);

     useEffect(() => {
        firebase
          .firestore()
          .collection('orders')
          .onSnapshot((item) => {
            const array = [];
            item.forEach((item) => array.push(item.data()));
            setRequest(array)
          });
      }, []); 



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
            }) };
      */

    

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
              
              <BtnItem >Pronto!</BtnItem>
        </div>))}
        </>
    );

  }

  export default Card;

  

    

    /* return (
        <>
            <Header
                primaryLink='Em preparo'
                primaryRoute='/kitchen'
                secondLink='Concluídos'
                secondRoute='/kitchen-done-orders'
            />
            <main className={css(styles.main)}>
                <article className={css(styles.article, styles.flex, styles.minHeight)}>
                    {ordersToPrepare.length !== 0
                        ? ordersToPrepare.map(order => (
                            <OrderCards
                                {...order}
                                allOrders={ordersToPrepare}
                                key={order.id}
                                waiter={true}
                            />))
                        : (
                            <div className={css(styles.noOrders, styles.flex)}>
                                Nenhum pedido recebido.
                            </div>
                        )
                    }
                </article>
            </main>
        </>
    )
}; */