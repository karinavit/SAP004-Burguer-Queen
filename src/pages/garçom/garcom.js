import React from "react";
import firebase from '../../fireconfig.js';
import 'firebase/auth'
import 'firebase/firestore'

//import Routes from "./routes";
/* export function enviarPedido() {
    const teste = <buttom>Enviar Pedido</buttom>
    console.log(teste)
    return enviarPedido
}; */

const menu = () => {
    firebase
    .firestore().collection("menu").get().then((snapshot) =>{ snapshot.docs.forEach((doc)=> {
        console.log(doc.data(menu))
    })

    }
    )}

function Garcom() {
    


    return (
        <select>
            <option>Itens</option>
         </select>
      
    );
  }
  
  export default Garcom;