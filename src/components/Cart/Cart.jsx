import React, { Component } from "react";
import "./Cart.scss";
import axios from "axios";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  componentDidMount = () => {
    let total = 0;
    this.props.cart.forEach((eachCartItem) => {
      total += eachCartItem.inCartCount * eachCartItem.price;
    });
    this.setState({
      total,
    });
  };

  createOrder = () => {
    axios.post(
      "/orders",
      {
        items: this.props.cart.map((eachCartItem) => {
          return {
            id: eachCartItem.id,
            name: eachCartItem.name,
            price: eachCartItem.price,
            count: eachCartItem.inCartCount,
            category: eachCartItem.category,
          };
        }),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

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
          <div className="total-value">
            <div>total: {this.state.total}</div>
            <button onClick={() => this.createOrder()}>Checkout</button>
          </div>
        </div>
      );
    } else {
      return <div className="cart-page">No Items in the cart</div>;
    }
  }
}
