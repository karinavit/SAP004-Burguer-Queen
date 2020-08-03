import React from 'react';
import Button from '@material-ui/core/Button';

function ButtonMenu(props) {

    return (
        <Button onClick={props.onClick}>{props.children}</Button>
    );
  }
  
  export default ButtonMenu;