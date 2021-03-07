import React, { Component } from "react";
import "./Counter.css";
class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button onClick={this.props.onIncrement}>+</button>
        <p>{this.props.value}</p>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
