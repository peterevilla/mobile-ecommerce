import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { BrowserRouter as  Switch, Route} from "react-router-dom";
import CartList from "./components/CartList";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import ProductPage from "./components/ProductPage";
import Guitar from "./components/Guitar";
import Bass from "./components/Bass";
import Synth from "./components/Synth";
import axios from "axios";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useLocalStorage("cart", []);

  useEffect(() => {
    axios
      .get(
        "https://strings-music-instruments-api.herokuapp.com/api/instruments"
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, [products]);

  const addItem = (item) => {
    // add the given item to the cart
    setCart([...cart, item]);
    alert("Item added to cart")
  };

  const removeItem = (item) => {
    let cartList = cart.filter((element) => {
      return element.id !== item.id;
    });
    setCart(cartList);
  };
  return (
    <div className="font-quick lg:px-32">
      <ProductContext.Provider value={{ products, addItem }} >
      <CartContext.Provider value={{ cart, removeItem }}>
        <Navigation inCart={cart} />

        {/* Routes */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/guitar">
            <Guitar />
          </Route>
          <Route exact path="/bass">
            <Bass />
          </Route>
          <Route exact path="/synth">
            <Synth />
          </Route>
          <Route path="/cart">
            <CartList />
          </Route>
          <Route
            path="/guitar/:id"
            render={(routeProps) => {
              return <ProductPage match={routeProps.match} items={products} />;
            }}
          />
          <Route
            path="/bass/:id"
            render={(routeProps) => {
              return <ProductPage match={routeProps.match} items={products} />;
            }}
          />
          <Route
            path="/synth/:id"
            render={(routeProps) => {
              return <ProductPage match={routeProps.match} items={products} />;
            }}
          />
        </Switch>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
