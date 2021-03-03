import React, { Component } from 'react'
import './Header.css';
class Header extends Component {
    render() {
        return (
            <div className="header">
                logo
                <div>cart total : {this.props.cartValue}</div>
            </div>
        )
    }
}

export default Header;