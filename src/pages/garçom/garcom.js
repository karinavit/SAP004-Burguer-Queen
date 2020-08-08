import React, { useEffect, useState } from "react";
//import Image from '../Componentes/ImagemFundo/ImagemFundo'
import ButtonIn from "../../pages/Componentes/ButtonIn/ButtonIn";
import Input from "../Componentes/Input/Input";
//import Header from '../Componentes/Header/Header'
import ProductsContainer from "../Componentes/ProductsContainer/ProductsContainer";
import firebase from '../../fireconfig.js';
import 'firebase/auth'
import 'firebase/firestore';
import './garcom.css'; 

function Garcom() {
    const [menu, setMenu] = useState ()
    const [morning, setMorning] = useState (false)
    const [all, setAll] = useState (false)
    //const [request, setRequest] = useState ([])
    
    useEffect( () => { firebase.firestore().collection("menu")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
           const data = doc.data()
           setMenu(data)           

        });
    }) } , []) 

  function openBreakfast(){
        setMorning(true)
        setAll(false)
        }
    function openAllDay(){
        setMorning(false)
        setAll(true)
        }
        
    /* function newRequest(item){
        setRequest(item.item)
    }  */   
    return (
        <>    
         <form className='input-request'>
            <Input placeholder="Cliente"></Input>
            <Input placeholder="Nº da Mesa"></Input>
        </form>   
        <p>
        <ButtonIn onClick={openBreakfast}> Café da Manhã </ButtonIn>
        <ButtonIn onClick={openAllDay}> Todo o dia </ButtonIn>
        </p>
        <ProductsContainer>
            <>
            {morning && menu.breakfast.map((item) => <div className='card'> 
            <img className='product' src={item.img} alt="" /> <p>{item.item}</p> <br /> R${item.price} <br /></div>)}
            {all && menu.allday.map((item) => <div className='card'> 
            <img className='product' src={item.img} alt=""  />
            <p>{item.item}</p> <br /> R${item.price} <br /></div>)}
            </>
        </ProductsContainer>
        {/* <div>
         {request && menu.map((item) => <p>{item.item}</p>)} 
        </div> */}
        </>
    );
    }

    
  export default Garcom;
