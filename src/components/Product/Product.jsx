import React, { Component } from "react";
import Counter from "../Counter/Counter";
import "./Product.css";

class Product extends Component {
  render() {
    return (
      <div className="product-card">
        <p>{this.props.product.name}</p>
        <p>Rs. {this.props.product.price}</p>
        <p>Count in stock {this.props.product.count}</p>
        <Counter
          value={this.props.product.inCartCount}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
        />
      </div>
    );
  }
}

export default Product;
