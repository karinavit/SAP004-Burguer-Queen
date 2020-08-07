import React from 'react';
import './header.css'
//import Logo from '../Logo/Logo'

function Header(props) {

    return (
        <header className={props.className}>
            
            {props.children}</header>
    );
  }
  
  export default Header;