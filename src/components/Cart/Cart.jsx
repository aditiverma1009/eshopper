import React, { Component } from "react";
import "./Cart.scss";
export default class Cart extends Component {
  render() {
    if (this.props.cart.length > 0) {
      return (
        <div className="cart-page">
          <table className="cart-table">
            <tr>
              <td>Item</td>
              <td>Unit Price</td>
              <td>Quatity</td>
              <td>Sub Total</td>
            </tr>
            {this.props.cart.map((eachCartItem) => {
              return (
                <tr key={eachCartItem.id}>
                  <td>{eachCartItem.name}</td>
                  <td>Rs. {eachCartItem.price}</td>
                  <td>{eachCartItem.inCartCount}</td>
                  <td>{eachCartItem.inCartCount * eachCartItem.price}</td>
                </tr>
              );
            })}
          </table>
        </div>
      );
    } else {
      return <div className="cart-page">No Items in the cart</div>;
    }
  }
}
