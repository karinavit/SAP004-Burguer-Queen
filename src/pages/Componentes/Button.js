import React from 'react';
import Button from '@material-ui/core/Button';

function Botao(props) {

    return (
        <Button onClick={props.onClick}>{props.children}</Button>
    );
  }
  
  export default Botao;