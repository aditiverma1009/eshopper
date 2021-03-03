import React, { Component } from 'react'
import Counter from '../Counter/Counter';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <div className="product-card">
                <p>name: {this.props.product.name}</p>
                <p>id: {this.props.product.id}</p>
                <p>price: {this.props.product.price}</p>
                <p>count: {this.props.product.count}</p>
                <Counter value={this.props.product.count} onIncrement={this.props.onIncrement} />
            </div>
        )
    }
}

export default Product;