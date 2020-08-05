import React, { useEffect, useState } from "react";
import Buttonmenu from "../../pages/Componentes/Buttonmenu";
import Input from "../Componentes/Input/Input";
import firebase from '../../fireconfig.js';
import 'firebase/auth'
import 'firebase/firestore';
import ProductsContainer from "../Componentes/ProductsContainer/ProductsContainer";



function Garcom() {
    const [menu, setMenu] = useState ()
    useEffect( () => { firebase.firestore().collection("menu")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
           const data = doc.data()
           setMenu(data)            //doc.data() imprime o menu completo
        });
    }) } , []) 

   const morningMenu = (e) => {
    e.preventDefault()
      
   
    

    }
     
    return (
        <>
        <Input placeholder="Cliente"></Input>
        <Input placeholder="Nº da Mesa"></Input>
        <p>
        <Buttonmenu onClick={e=> morningMenu(e)}> Café da Manhã </Buttonmenu>
        <Buttonmenu> Todo o dia </Buttonmenu>
        </p>
        <ProductsContainer><>{
            menu?(menu.breakfast.map(item => item.item)):null
        } </></ProductsContainer>
        
        </>
    );
    }

    
  export default Garcom;






  /* const allmenu = (e) => {
    e.preventDefault()
    firebase
    .firestore().collection("menu").get()
    .then((snapshot) =>{ snapshot.docs.forEach((doc)=> {
        console.log(doc.data())
    }) */