import React, { Component } from 'react'
import Product from '../Product/Product';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'apple',
                    price: 10
                },
                {
                    id: 2,
                    name: 'banana',
                    price: 10
                },
                {
                    id: 3,
                    name: 'grapes',
                    price: 10
                }
            ]
        }
    }

    render() {
        return (
            <div>
                home
                <Product product={this.state.products[0]} />
                <Product product={this.state.products[1]} />
                <Product product={this.state.products[2]} />
            </div>
        )
    }
}

export default Home;