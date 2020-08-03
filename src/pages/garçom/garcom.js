import React from "react";
import Buttonmenu from "../../pages/Componentes/Buttonmenu";
import firebase from '../../fireconfig.js';
import 'firebase/auth'
import 'firebase/firestore';

//const [menu, setMenu] = useState ('')

function Garcom() {
   const morningMenu = (e) => {
    e.preventDefault()
    firebase.firestore().collection("menu")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    

    }
     
    return (
        <>
        <Buttonmenu onClick={e=> morningMenu(e)}> Café da Manhã </Buttonmenu>
        <Buttonmenu> Todo o dia </Buttonmenu>
        <p></p>
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