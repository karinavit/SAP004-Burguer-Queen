import React from 'react';
//import { isAuthenticated } from "./auth"
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/login'
import Garcom from './pages/garçom/garcom.js'


/* const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  ); */

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} /> */}
        <Route path="/cadastro" component={() => <h1>Cadastro</h1>} />
        <Route path="/garcom" component={Garcom}/>
        <Route path="/cozinha" component={() => <h1>Cozinha</h1>} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;