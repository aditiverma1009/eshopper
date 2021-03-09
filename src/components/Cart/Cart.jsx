import React, { useState, useEffect } from "react";
import "./Cart.scss";
import axios from "axios";

const Cart = (props) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    props.cart.forEach((eachCartItem) => {
      total += eachCartItem.inCartCount * eachCartItem.price;
    });
    setTotal(total);
  }, []);

  const createOrder = () => {
    axios.post(
      "/orders",
      {
        items: props.cart.map((eachCartItem) => {
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

  if (props.cart.length > 0) {
    return (
      <div className="cart-page">
        <table className="cart-table">
          <tr>
            <td>Item</td>
            <td>Unit Price</td>
            <td>Quatity</td>
            <td>Sub Total</td>
          </tr>
          {props.cart.map((eachCartItem) => {
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
          <div>total: {total}</div>
          <button onClick={() => createOrder()}>Checkout</button>
        </div>
      </div>
    );
  } else {
    return <div className="cart-page">No Items in the cart</div>;
  }
};

export default Cart;
