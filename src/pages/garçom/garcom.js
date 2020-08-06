import React, { useEffect, useState } from "react";
import Buttonmenu from "../../pages/Componentes/Buttonmenu";
import Input from "../Componentes/Input/Input";
import firebase from '../../fireconfig.js';
import 'firebase/auth'
import 'firebase/firestore';
import ProductsContainer from "../Componentes/ProductsContainer/ProductsContainer";



function Garcom() {
    const [menu, setMenu] = useState ()
    const [morning, setMorning] = useState ()
    
    useEffect( () => { firebase.firestore().collection("menu")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
           const data = doc.data()
           setMenu(data)           
        });
    }) } , []) 

    const morningMenu = (e) => {
        e.preventDefault()
        menu?(menu.breakfast.map(item => item.item)):null
        }

     
    return (
        <>
        <Input placeholder="Cliente"></Input>
        <Input placeholder="Nº da Mesa"></Input>
        <p>
        <Buttonmenu value={morning} onChange={e=> setMorning(e.target.value)}> Café da Manhã </Buttonmenu>
        <Buttonmenu> Todo o dia </Buttonmenu>
        </p>
        <ProductsContainer>
            <>
            {morningMenu}
            </>
        </ProductsContainer>
        
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