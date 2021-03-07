import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";
import BASE_URL from "../../constants/index";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
      cartCount: 0,
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
    const newState = {
      ...this.state,
      cartCount: this.state.cartCount + 1,
      products: this.state.products.map((eachProduct) => {
        if (
          eachProduct.id === id &&
          eachProduct.count > eachProduct.inCartCount &&
          eachProduct.count !== 0
        ) {
          return { ...eachProduct, inCartCount: eachProduct.inCartCount + 1 };
        }
        return eachProduct;
      }),
    };
    this.setState(newState);
  }

  onDecrement(id) {
    const newState = {
      ...this.state,
      cartCount: this.state.cartCount - 1,
      products: this.state.products.map((eachProduct) => {
        if (eachProduct.id === id && eachProduct.inCartCount > 0) {
          return { ...eachProduct, inCartCount: eachProduct.inCartCount - 1 };
        } else {
          return eachProduct;
        }
      }),
    };
    this.setState(newState);
  }

  render() {
    console.log(this.state.products);
    const allProducts = this.state.products.map((eachProduct) => {
      return (
        <Product
          key={eachProduct.id}
          product={eachProduct}
          onIncrement={() => this.onIncrement(eachProduct.id)}
          onDecrement={() => this.onDecrement(eachProduct.id)}
        />
      );
    });

    return (
      <div>
        <div className="product-grid">{allProducts}</div>
      </div>
    );
  }
}

export default Home;
