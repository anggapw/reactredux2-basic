import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CardProduct.css'
import Counter from './Counter';


class CardProduct extends Component {
    render() {
        const products = this.props.products;
        return (
            <>
                {products.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.image} alt="product_img" />
                        <div className="container">
                            <h4>{item.name}</h4>
                            <h4>{`Rp. ${item.price.toLocaleString()}`}</h4>
                            <h4>{item.stock}</h4>
                            <Counter />
                        </div>
                    </div>
                ))}
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        products: state.products,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CardProduct);
