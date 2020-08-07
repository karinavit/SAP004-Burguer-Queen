import React from 'react';
import './header.css'
import Logo from '../Logo/Logo'

function Header(props) {

    return (
            <header className='header'>
                <Logo />
                <button onClick={props.onclick}>{props.link1}</button>
                <button>Sair</button>

            </header>
    );
  }
  
  export default Header;