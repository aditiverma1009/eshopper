import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllOrders from "./components/AllOrders/AllOrders";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header cartValue={"1"} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/all-orders">
            <AllOrders />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
