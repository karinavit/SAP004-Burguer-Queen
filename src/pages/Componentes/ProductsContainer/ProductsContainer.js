import React, { useEffect, useState } from "react";
import "./productsContainer.css";
import ButtonIn from '../ButtonIn/ButtonIn';
import Input from "../Input/Input";
import firebase from '../../../fireconfig';
import 'firebase/auth'
import 'firebase/firestore';


function ProductsContainer() {
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
  return (
    <>
    <form className='input-request'>
          <Input placeholder="Cliente"></Input>
          <Input placeholder="Nº da Mesa"></Input>
        </form> 
      <div className='btn-request'>  
        <ButtonIn onClick={openBreakfast}> Café da Manhã </ButtonIn>
        <ButtonIn onClick={openAllDay}> Todo o dia </ButtonIn> 
      </div>  
    <div className="pr-container">
        <div>
            {morning && menu.breakfast.map((item) => 
            <div className='card'> 
            <img className='product' src={item.img} alt="" />
            <div className='product-name'>
            <h3>{item.item}</h3> <br/> 
            <p>R${item.price}</p> <br/>
            </div>
            </div>)}

            {all && menu.allday.map((item) => 
            <div className='card'> 
            <img className='product' src={item.img} alt=""  />
            <div className='product-name'>
            <h3>{item.item}</h3> <br/> 
            <p>R${item.price}</p> <br/>
            </div>
            </div>)}
        </div>    

    </div>
    </>
)}

export default ProductsContainer;
