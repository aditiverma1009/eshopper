import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllOrders from "./components/AllOrders/AllOrders";
import axios from "axios";
import BASE_URL from "./constants/index.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
      cartCount: 0,
      cart: [],
    };
  }

  componentDidMount = async () => {
    const { data, error } = await axios.get(`${BASE_URL}/items`);
    const products = data.data;
    if (products) {
      this.setState({
        isLoaded: true,
        products: products.map((eachProduct) => {
          return {
            ...eachProduct,
            inCartCount: 0,
          };
        }),
      });
    } else if (error) {
      this.setState({
        isLoaded: true,
        error: error,
      });
    }
  };

  onIncrement(id) {
    const product = this.state.products.find(
      (eachProduct) => eachProduct.id === id
    );
    if (product && product.count > product.inCartCount && product.count !== 0) {
      let currentProduct = {};
      const newState = {
        ...this.state,
        cartCount: this.state.cartCount + 1,
        products: this.state.products.map((eachProduct) => {
          if (eachProduct.id === id) {
            currentProduct = {
              ...eachProduct,
              inCartCount: eachProduct.inCartCount + 1,
            };
            return currentProduct;
          }
          return eachProduct;
        }),
        cart: [...this.state.cart, currentProduct],
      };
      this.setState(newState);
    }
  }

  onDecrement(id) {
    const product = this.state.products.find(
      (eachProduct) => eachProduct.id === id
    );
    if (product && product.inCartCount > 0) {
      const newState = {
        ...this.state,
        cartCount: this.state.cartCount - 1,
        products: this.state.products.map((eachProduct) => {
          if (eachProduct.id === id) {
            return { ...eachProduct, inCartCount: eachProduct.inCartCount - 1 };
          } else {
            return eachProduct;
          }
        }),
      };
      this.setState(newState);
    }
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header cartValue={this.state.cartCount} />
          <Switch>
            <Route path="/" exact>
              <Home
                products={this.state.products}
                onIncrement={(id) => this.onIncrement(id)}
                onDecrement={(id) => this.onDecrement(id)}
              />
            </Route>
            <Route path="/all-orders">
              <AllOrders />
            </Route>
            <Route path="/cart">
              <Cart cart={this.state.cart} />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
