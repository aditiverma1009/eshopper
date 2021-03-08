import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">logo</Link>
        <Link to="/all-orders">All orders</Link>
        <Link to="/cart">cart total : {this.props.cartValue}</Link>
      </div>
    );
  }
}

export default Header;
