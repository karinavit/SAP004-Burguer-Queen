import React from 'react';
import './header.css'
import LogoHeader from '../LogoHeader/LogoHeader'
import Button from '../Button/Button'
import firebase from "../../../fireconfig";
import "firebase/auth";

function Header(props) {

    const logout = (e) => {
        e.preventDefault()
        firebase
        .auth()
        .signOut()
        .then(() => {
            window.location.href = '/';
          })
          .catch(console.error);
      };

    return (
            <header className='header'>
                <LogoHeader />
                <Button>{props.link1}</Button>
                <Button>{props.link2}</Button>
                <Button onClick={logout}>Sair</Button>

            </header>
    );
  }
  
  export default Header;