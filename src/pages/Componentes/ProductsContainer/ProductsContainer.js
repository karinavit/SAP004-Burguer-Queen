import React, { useEffect, useState } from "react";
import "./productsContainer.css";
import ButtonIn from '../ButtonIn/ButtonIn';
import Input from "../Input/Input";
import firebase from '../../../fireconfig';
import 'firebase/auth'
import 'firebase/firestore';
import Button from "../Button/Button";


function ProductsContainer() {
const [menu, setMenu] = useState ()
const [morning, setMorning] = useState (false)
const [all, setAll] = useState (false)
const [orders, setOrders] = useState([]);
const [contar, setContar] = useState(1)
//const [menuItem , setExtras] = useState([]);

const [name,setName ] = useState("");
const [table, setTable] = useState("");
//const [total, setTotal] = useState();


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
  
  function newRequest(e, item) {
    setContar((contar + 1));
    item.contar = contar
    setOrders([item]);
    let array = [];
    if(orders){
      orders.map(produto=>{
        if(produto.item === produto.item){setContar(contar)}
      } 
        
      )
      
    }
    
    
    console.log(orders)
  }
  
  

//fazer a adição de produtos antes de excluir


const deleteItem = (product) => {
  product.contar --
  const remove = orders.filter(el => el.contar);
  setOrders([remove]);
  console.log(product)
} 


//função da Evellyn
/* const deleteItem = (event, name) => { event.preventDefault(); 
  let result = itens.findIndex((item) => item.name === name);
   console.log(result); if (itens[result].count > 1) { itens[result].count--; 
    setNameItens([...itens]); }
     else { const newItens = itens.filter((item, index) => index !== result);
       setNameItens(newItens); } 
      };  

      const customerRequest = (event, name, price) => { event.preventDefault(); 
        let result = itens.findIndex((item) => item.name === name); 
        if (result >= 0) { let list = itens; list[result].count++;
           setNameItens([...list]); }
            else { setNameItens([ ...itens, { name, price, count, }, ]); } }; */

    

//const bill = () => order.reduce((acc, bill)=> acc + (bill.price * bill.unit), 0)


const sendOrder = (e) => {
  e.preventDefault()
  if (orders.length && table && name) {
      firebase
      .firestore().collection('orders')
      .doc()
      .set({                
          name: name,
          table: parseInt(table),
          orders: orders,
          //total,
      }) 
      .then(() => {
          setOrders([])
          //setTotal(0)
          setName('')
          setTable(0)
          alert('Pedido enviado com sucesso')
      })    
  }
  else if (!orders.length) {
      alert('Um item deve ser selecionado')
  }
  else if (!table) {
      alert('Digite o número da mesa')
  }
  else if (!name) {
      alert('Digite o nome do cliente')
  }
}


  return (
    <>
    <form className='input-request'>
          <Input placeholder="Cliente" value= {name} onChange={(e) => setName(e.target.value)}></Input>
          <Input placeholder="Nº da Mesa" value={table} onChange={(e) => setTable(e.target.value)}>
          </Input>
        </form> 
      <div className='btn-request'>  
        <ButtonIn onClick={openBreakfast}> Café da Manhã </ButtonIn>
        <ButtonIn onClick={openAllDay}> Todo o dia </ButtonIn> 
      </div>  
    <div className="pr-container">
        <div>
            {morning && menu.breakfast.map((item) => 
            <div className='card' onClick={(e) => 
              newRequest(e, item)}> 
            <img className='product' src={item.img} alt="" />
            <div className='product-name'>
            <h3>{item.item}</h3> <br/> 
            <p>R${item.price}</p> <br/>
            </div>
            </div>)}

            {all && menu.allday.map((item) => 
            <div className='card' onClick={(e) => 
              newRequest(e, item)}>  
            <img className='product' src={item.img} alt=""  />
            <div className='product-name'>
            <h3>{item.item}</h3> <br/> 
            <p>R${item.price}</p> <br/>
            </div>
            </div>)}
        </div>    

    </div>

    <div> Comanda </div>
      {/* <ul>
         {orders && orders.map((item, index) => (
            <li key={index}>
              <p>{item.item} R${item.price}</p>
              <p onClick={() => deleteItem(item)}>X</p>
            </li>
            ))}
            </ul> */}
            <Button onClick={sendOrder}>Enviar Pedido</Button>
            
         
         </>
  )
}

export default ProductsContainer;
