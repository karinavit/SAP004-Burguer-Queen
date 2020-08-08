import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
/* import firebase from './fireconfig'
import "firebase/auth";
import "firebase/firestore"; */

import Login from './pages/login/login'
import Register from './pages/Register'
import Garcom from './pages/garçom/garcom'
import Cozinha from './pages/cozinha/cozinha'

/* const PrivateRoute = ({ component: Component, ...rest } ) => (
  <Route
    {...rest}
    render={props => {
      console.log(firebase.auth().currentUser)
      return firebase.auth().currentUser ? (
      
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/"}} />
                
      )
    }
    
    }
  />
);  */


const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/cadastro" component={Register} />
        <Route path="/garcom" component={Garcom}/>
        <Route path="/cozinha" component={Cozinha} />
      </Switch>
    </BrowserRouter>
  );
  
  /* <PrivateRoute path="/garcom" component={HeadBody}/>
        <PrivateRoute path="/cozinha" component={Cozinha} /> */
    

  export default Routes;