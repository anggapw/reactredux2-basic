import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Cart.css';
import { removeAllProduct } from '../action/action';

class Cart extends Component {
    render() {
        const cart = this.props.cart;
        return (
            <div class="cartContainer">
                {cart.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.image} alt="product_img" />
                        <div className="container">
                            <h4>{item.name}</h4>
                            {/* <h4>{`Rp. ${item.price.toLocaleString()}`}</h4> */}
                            <h4>{item.price}</h4>
                            <h4>{item.quantity}</h4>
                            <h4>total price: {item.price * item.quantity}</h4>
                            <button className="remove" onClick={this.props.removeAllProduct.bind(this, item)}>Remove All Product</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        products: state.products,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeAllProduct: cart => dispatch(removeAllProduct(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);