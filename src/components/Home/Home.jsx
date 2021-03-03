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
                    price: 10,
                    count: 0
                },
                {
                    id: 2,
                    name: 'banana',
                    price: 10,
                    count: 0
                },
                {
                    id: 3,
                    name: 'grapes',
                    price: 10,
                    count: 0
                }
            ],
            cartCount: 0
        }
    }

    onIncrement(id) {
        // increment ... value of count in grapes
        const newState = {
            ...this.state,
            cartCount: this.state.cartCount + 1,
            products: this.state.products.map((eachProduct) => {
                if (eachProduct.id === id) {
                    return { ...eachProduct, count: eachProduct.count + 1 }
                }
                return eachProduct
            })
        }
        console.log('newState%%%%', newState)
        this.setState(newState)

        // updateCount = {
        //     ...eachProduct,
        //     count: eachProduct.count + 1
        // }

    }

    render() {
        const allProducts = this.state.products.map((eachProduct) => {
            return (<Product key={eachProduct.id} product={eachProduct} onIncrement={() => this.onIncrement(eachProduct.id)} />)
        })

        const arr = [1, 2, 3]
        const newARR = arr.map((eachArr) => {
            return eachArr;
        })
        return (
            <div>
                home
                <div>
                    {allProducts}
                </div>
            </div>
        )
    }
}

export default Home;