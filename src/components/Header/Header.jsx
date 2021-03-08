import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/all-orders" className="link">
          All orders
        </Link>
        <Link to="/cart" className="link">
          Cart total: {this.props.cartValue}
        </Link>
      </div>
    );
  }
}

export default Header;
