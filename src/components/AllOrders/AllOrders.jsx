import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllOrders.scss";

const AllOrders = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    const { data, error } = await axios.get(`/orders`);
    const orders = data.data;
    if (orders) {
      setIsLoaded(true);
      setOrders(orders);
    } else if (error) {
      setIsLoaded(true);
      setError(error);
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="all-products">
      <table className="all-products-table">
        <tr className="order-rows">
          <td>Order ID</td>
          <td>Date</td>
          <td>Items</td>
        </tr>
        {orders.map((eachOrder) => {
          return (
            <tr className="order-rows" key={eachOrder.id}>
              <td>{eachOrder.id}</td>
              <td>{new Date(eachOrder.date).toString()}</td>
              <td>
                {eachOrder.items.map((eachItem) => {
                  return (
                    <table className="item-table" key={eachOrder + eachItem}>
                      <tr>
                        <td>{eachItem.id}</td>
                        <td>{eachItem.name}</td>
                        <td>{eachItem.count}</td>
                      </tr>
                    </table>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default AllOrders;
