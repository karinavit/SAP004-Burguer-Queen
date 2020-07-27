import React from '../../../node_modules/react';
import Input from './Input';
import Button from './Button';
import firebaseapp from '../fireconfig.js';
import 'firebase/auth'

/* import React from 'react';
import Input from './Input';
import Button from './Button' */

/* essa já era uma funcion comentada 
function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('O link foi clicado.');
    } */

/* function Form() { 

>>>>>>> 212a5c71dced7ed9b10c1e8057e2ade8dceb5f81
    return (
        <form>
            <p>
            <Input placeholder="Email"/>  
            </p>
            <p>
            <Input type="password" placeholder="Senha"/>
            </p>
            <Button btname="LogIn"/>
                         </form>
        );}  */

      
        
        /* const cadastro = () => {
          firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
            console.log(user)
          }) */
          function Form() { 
            const [email, setEmail] = React.useState('');
            const [pass, setPass] = React.useState('');
            
            const login = (e) => {
                e.preventDefault()
                console.log(email,pass)
              firebaseapp.auth().signInWithEmailAndPassword(email, pass).then(user => {
                console.log(user)
                  })
            };
        
            return (
                <form>
                        <p>
                            <Input placeholder="Email" 
                            value={email} onChange={e=> setEmail(e.target.value)}
                            />  
                        </p>
                        <p>
                            <Input type="password" placeholder="Senha" 
                            value={pass} onChange={e=> setPass(e.target.value)}
                            />
                        </p>
                    <Button onClick={e=> login(e)} btname="Logar"/>
                </form>
                );
            }
             
                  
          export default Form;