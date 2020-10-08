import React, {useState, useEffect} from 'react';
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
import Guitar from './components/Guitar'
import Bass from './components/Bass';
import Synth from './components/Synth';
import axios from 'axios';


function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

useEffect(() => {

  axios
  .get('https://strings-music-instruments-api.herokuapp.com/api/instruments')
  .then(response => {
    setProducts(response.data)
  })
  .catch(err => console.log(err))
},[])

  return (
    <div className="font-quick lg:px-32" >
      <ProductContext.Provider value={{products}}>
      <Navigation/>

      {/* Routes */}
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/guitar'>
          <Guitar/>
        </Route>
        <Route path='/bass'>
          <Bass/>
        </Route>
        <Route path='/synth'>
          <Synth/>
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
