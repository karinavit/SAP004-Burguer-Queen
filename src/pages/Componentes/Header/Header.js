import React from 'react';
import './header.css'
import LogoHeader from '../LogoHeader/LogoHeader'
import Button from '../Button/Button'

function Header(props) {

    return (
            <header className='header'>
                <LogoHeader />
                <Button>{props.link1}</Button>
                <Button>{props.link2}</Button>
                <Button>Sair</Button>

            </header>
    );
  }
  
  export default Header;