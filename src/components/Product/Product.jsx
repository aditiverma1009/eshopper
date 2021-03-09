import React from "react";
import Counter from "../Counter/Counter";
import "./Product.scss";

const Product = (props) => {
  return (
    <div className="product-card">
      <p>{props.product.name}</p>
      <p>Rs. {props.product.price}</p>
      <p>Count in stock {props.product.count}</p>
      <Counter
        value={props.product.inCartCount}
        onIncrement={props.onIncrement}
        onDecrement={props.onDecrement}
      />
    </div>
  );
};

export default Product;
