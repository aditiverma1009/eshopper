import React, { Component } from 'react'
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div className="product-card">
                <p>{this.props.product.name}</p>
                <p>{this.props.product.id}</p>
                <p>{this.props.product.price}</p>
            </div>
        )
    }
}

export default Product;