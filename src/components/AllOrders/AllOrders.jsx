import React, { Component } from "react";
import axios from "axios";
import BASE_URL from "../../constants/index";
import "./AllOrders.css";

export default class AllOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      orders: [],
    };
  }

  componentDidMount = async () => {
    const { data, error } = await axios.get(`${BASE_URL}/orders`);
    const orders = data.data;
    if (orders) {
      this.setState({
        isLoaded: true,
        orders: orders,
      });
    } else if (error) {
      this.setState({
        isLoaded: true,
        error: error,
      });
    }
  };

  render() {
    const { error, isLoaded, orders } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="all-products">
        {orders.map((eachOrder) => {
          return (
            <div key={eachOrder.id}>
              {eachOrder.id}--- {Date(eachOrder.date)}
            </div>
          );
        })}
      </div>
    );
  }
}
