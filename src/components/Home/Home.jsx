import React, { Component } from "react";
import Product from "../Product/Product";

import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.products);
    const allProducts = this.props.products.map((eachProduct) => {
      return (
        <Product
          key={eachProduct.id}
          product={eachProduct}
          onIncrement={() => this.props.onIncrement(eachProduct.id)}
          onDecrement={() => this.props.onDecrement(eachProduct.id)}
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
