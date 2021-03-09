import React, { useEffect, useState } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllOrders from "./components/AllOrders/AllOrders";
import axios from "axios";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(async () => {
    const { data, error } = await axios.get(`/items`);
    const products = data.data;
    if (products) {
      setIsLoaded(true);
      setProducts(
        products.map((eachProduct) => {
          return {
            ...eachProduct,
            inCartCount: 0,
          };
        })
      );
    } else if (error) {
      setIsLoaded(true);
      setError(error);
    }
  }, []);

  const updateCart = (currentProduct) => {
    let flag = 0;
    const updatedCart = cart.map((eachProduct) => {
      if (eachProduct.id === currentProduct.id) {
        flag = 1;
        return {
          ...eachProduct,
          inCartCount: eachProduct.inCartCount + 1,
        };
      } else {
        return eachProduct;
      }
    });
    if (!flag) {
      updatedCart.push(currentProduct);
    }
    return updatedCart;
  };

  const onIncrement = (id) => {
    const product = products.find((eachProduct) => eachProduct.id === id);
    if (product && product.count > product.inCartCount && product.count !== 0) {
      let currentProduct = {};
      setCartCount(cartCount + 1);
      const updatedProduct = products.map((eachProduct) => {
        if (eachProduct.id === id) {
          currentProduct = {
            ...eachProduct,
            inCartCount: eachProduct.inCartCount + 1,
          };
          return currentProduct;
        } else {
          return eachProduct;
        }
      });
      setProducts(updatedProduct);
      setCart(updateCart(currentProduct));
    }
  };

  const onDecrement = (id) => {
    const product = products.find((eachProduct) => eachProduct.id === id);
    if (product && product.inCartCount > 0) {
      setCartCount(cartCount - 1);
      setProducts(
        products.map((eachProduct) => {
          if (eachProduct.id === id) {
            return { ...eachProduct, inCartCount: eachProduct.inCartCount - 1 };
          } else {
            return eachProduct;
          }
        })
      );
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <BrowserRouter>
        <Header cartValue={cartCount} />
        <Switch>
          <Route path="/" exact>
            <Home
              products={products}
              onIncrement={(id) => onIncrement(id)}
              onDecrement={(id) => onDecrement(id)}
            />
          </Route>
          <Route path="/all-orders">
            <AllOrders />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
