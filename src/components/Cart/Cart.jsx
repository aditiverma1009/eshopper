import React, { Component } from "react";
import "./Cart.css";
export default class Cart extends Component {
  render() {
    if (this.props.cart.length > 0) {
      return (
        <div className="cart-page">
          <div>Cart</div>
          <div>
            {this.props.cart.map((eachCartItem) => {
              return (
                <div key={eachCartItem.id}>
                  <p>{eachCartItem.name}</p>
                  <p>Rs. {eachCartItem.price}</p>
                  <p>Quantity: {eachCartItem.cart}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <div className="cart-page">No Items in the cart</div>;
    }
  }
}
