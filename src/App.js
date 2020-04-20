import React, {useState} from 'react';
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
import {data} from "./data";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import  ProductPage from './components/ProductPage'


function App() {

  const [products] = useState(data)
  const [cart, setCart] = useState([])

  return (
    <div >
      <ProductContext.Provider value={{products}}>
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
        <Route path='/shop/:id'>
          <ProductPage/>
        </Route>

      </Switch>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
