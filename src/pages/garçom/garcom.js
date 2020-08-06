import React, { useEffect, useState } from "react";
import Buttonmenu from "../../pages/Componentes/Buttonmenu";
import Input from "../Componentes/Input/Input";
import firebase from '../../fireconfig.js';
import 'firebase/auth'
import 'firebase/firestore';
import ProductsContainer from "../Componentes/ProductsContainer/ProductsContainer";



function Garcom() {
    const [menu, setMenu] = useState ()
    const [morning, setMorning] = useState (false)
    const [all, setAll] = useState (false)
    
    useEffect( () => { firebase.firestore().collection("menu")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
           const data = doc.data()
           setMenu(data)           
        });
    }) } , []) 

   /*  const morningMenu = (e) => {
        e.preventDefault()
        menu?(menu.breakfast.map(item => item.item)):null
        } */
        //{menu?(menu.breakfast.map(item => item.item)):null}
        //{morning && menu.breakfast.filter((item)=>item.breakfast=== true).map((item)=><div className='card'>{item.item} {item.value} <br /></div>)}
        function openBreakfast(){
            setMorning(true)
            setAll(false)
          }
          function openAllDay(){
            setMorning(false)
            setAll(true)
          }  
    return (
        <>
        <Input placeholder="Cliente"></Input>
        <Input placeholder="Nº da Mesa"></Input>
        <p>
        <Buttonmenu onClick={openBreakfast}> Café da Manhã </Buttonmenu>
        <Buttonmenu onClick={openAllDay}> Todo o dia </Buttonmenu>
        </p>
        <ProductsContainer>
            <>
            {morning && menu.breakfast.map((item) => <div className='card'>{item.item} <br /> R${item.price} <br /></div>)}
            {all && menu.allday.map((item) => <div className='card'>{item.item} <br /> R${item.price} <br /></div>)}
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