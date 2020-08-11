import React, { useEffect, useState } from "react";
import "./productsContainer.css";
import ButtonIn from "../ButtonIn/ButtonIn";
import Input from "../Input/Input";
import firebase from "../../../fireconfig";
import "firebase/auth";
import "firebase/firestore";
import Button from "../Button/Button";

function ProductsContainer() {
  const [menu, setMenu] = useState();
  const [morning, setMorning] = useState(false);
  const [all, setAll] = useState(false);
  const [orders, setOrders] = useState([]);

  //const [menuItem , setExtras] = useState([]);

  const [name, setName] = useState("");
  const [table, setTable] = useState("");
  //const [total, setTotal] = useState();

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

  /* essa era a nossa função antiga de newrequest
  function newRequest(item) {
    console.log(item);
    //setContar((contar + 1))
    setOrders([...orders, item]);
  } */

  function newRequest(item) {
    const indexOrder = orders.findIndex((order) => order.item === item.item);
    if (indexOrder === -1) {
      setOrders([...orders, { ...item, count: 1 }]);
    } else {
      orders[indexOrder].count++;
      setOrders([...orders]);
      console.log(orders);
    }
  }

  const deleteItem = (product) => {
    const remove = orders.filter((el) => el.item !== product.item);
    setOrders(remove);
    console.log(product);
  };

  //const bill = () => order.reduce((acc, bill)=> acc + (bill.price * bill.unit), 0)

  const sendOrder = (e) => {
    e.preventDefault();
    if (orders.length && table && name) {
      firebase
        .firestore()
        .collection("orders")
        .doc()
        .set({
          name: name,
          table: parseInt(table),
          orders: orders,
          //total,
        })
        .then(() => {
          setOrders([]);
          //setTotal(0)
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
        <div>
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
      </div>

      <div> Comanda </div>
      <div>
        {orders &&
          orders.map((item) => (
            <div>
              <li>
                {item.count} {item.item} R${item.price}
              </li>
              <p onClick={() => deleteItem(item)}>X</p>
            </div>
          ))}

        <Button onClick={sendOrder}>Enviar Pedido</Button>
      </div>
    </>
  );
}
export default ProductsContainer;
