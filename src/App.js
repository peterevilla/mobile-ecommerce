import React from 'react';
import Navigation from './components/Navigation'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShopList from './components/ShopList';
import CartList from './components/CartList';


function App() {
  return (
    <div>
      <Navigation/>

      {/* Routes */}
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/shop'>
          <ShopList/>
        </Route>
        <Route path='/cart'>
          <CartList/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
