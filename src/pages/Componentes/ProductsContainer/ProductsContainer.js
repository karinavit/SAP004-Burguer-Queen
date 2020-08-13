import React, { useEffect, useState } from "react";
import "./productsContainer.css";
import ButtonIn from "../ButtonIn/ButtonIn";
import Input from "../Input/Input";
import firebase from "../../../fireconfig";
import "firebase/auth";
import "firebase/firestore";
import Button from "../Button/Button";
import BtnItem from '../BtnItem/BtnItem'

function ProductsContainer() {
  const [menu, setMenu] = useState();
  const [morning, setMorning] = useState(false);
  const [all, setAll] = useState(false);
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState("");
  const [table, setTable] = useState("");
  const [subtracao, setSubtracao] = useState(true);

  useEffect(() => {
    firebase
      .firestore()
      .collection("menu")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const data = doc.data();
          setMenu(data);
        });
      });
  }, []);
  function openBreakfast() {
    setMorning(true);
    setAll(false);
  }
  function openAllDay() {
    setMorning(false);
    setAll(true);
  }

  function newRequest(item, operacao) {
		const indexOrder = orders.findIndex((order) => order.item === item.item);
    if (indexOrder === -1) {
      setOrders([...orders, { ...item, count: 1 }]);
		}
		else {
			orders[indexOrder].count++;
      setOrders([...orders]);
		}
  }

  const subItem = (item) => {
    const subOrder = orders.findIndex((orders) => orders.item === item.item);
    if (item.count === 1) {
      return (document.getElementsByName("-").disabled = true);
    } else {
      setSubtracao(orders[subOrder].count--);
    }
  };
  
  const deleteItem = (product) => {
    const remove = orders.filter((el) => el.item !== product.item);
    setOrders(remove);
    console.log(product);
  };

  const bill = orders.reduce((acumulador, itemAtual)=>{
		return acumulador + (itemAtual.price * itemAtual.count)
	},0)

  const sendOrder = (e) => {
    e.preventDefault();
    if (orders.length && table && name) {
      firebase
        .firestore()
        .collection("orders")
        .doc()
        .set({
          id: firebase.auth().currentUser.uid,
          waiter: firebase.auth().currentUser.displayName,
          name: name,
          table: parseInt(table),
          orders: orders,
          total: bill,
          time: new Date().toLocaleString('pt-BR')
        })
        .then(() => {
          setOrders([]);
          setName("");
          setTable(0);
          alert("Pedido enviado com sucesso");
        });
    } else if (!orders.length) {
      alert("Um item deve ser selecionado");
    } else if (!table) {
      alert("Digite o número da mesa");
    } else if (!name) {
      alert("Digite o nome do cliente");
    }
  };

  return (
    <>
      <form className="input-request">
        <Input
          placeholder="Cliente"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder="Nº da Mesa"
          value={table}
          onChange={(e) => setTable(e.target.value)}
        ></Input>
      </form>
      <div className="btn-request">
        <ButtonIn onClick={openBreakfast}> Café da Manhã </ButtonIn>
        <ButtonIn onClick={openAllDay}> Todo o dia </ButtonIn>
      </div>
      <div className="pr-container">
        <div className='card-list'>
          {morning &&
            menu.breakfast.map((item) => (
              <div className="card" onClick={() => newRequest(item)}>
                <img className="product" src={item.img} alt="" />
                <div className="product-name">
                  <h3>{item.item}</h3> <br />
                  <p>R${item.price}</p> <br />
                </div>
              </div>
            ))}
          {all &&
            menu.allday.map((item) => (
              <div className="card" onClick={() => newRequest(item)}>
                <img className="product" src={item.img} alt="" />
                <div className="product-name">
                  <h3>{item.item}</h3> <br />
                  <p>R${item.price}</p> <br />
                </div>
              </div>
            ))}
        </div>
        <table className='table-request' cellspacing='20px'>
  <thead> 
  <tr>
    <th align='center'>Comanda</th>
  </tr>     
  <tr>
    <th align='center'>Qtd.</th>
    <th align='center'>Produto</th> 
    <th align='center'>Valor</th>
  </tr>
  </thead>
  <tbody>
  {orders &&
          orders.map((item) => (
  <tr>
    <td align='center'>{subtracao && (
                      <BtnItem name="-" onClick={() => subItem(item)}>-</BtnItem> 
                      )}
        {item.count}
        <BtnItem onClick={() => newRequest(item, 1)}>+</BtnItem>
    </td>
    <td align='center'>{item.item}</td>
    <td align='center'>R$ {item.price}</td>
    <td align='center'>
      <BtnItem className='btn-x' onClick={() => deleteItem(item)}>X</BtnItem>
    </td>
  </tr>))}
  </tbody>
  <tfoot>
    <tr>
      <td colspan='4' align='right' >Total: R$ {bill},00</td>
    </tr>
    <tr>
    <td colspan='4' align='center'><Button onClick={sendOrder}>Enviar Pedido</Button></td>
    </tr>
  </tfoot>
</table>

      </div>
      
    </>
  );
}
export default ProductsContainer;
