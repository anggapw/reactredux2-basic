import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import './Counter.css'
import {addItemToCart, removeItemFromCart} from '../action/action';

class Counter extends Component {
    render() {
        const cart = this.props.cart;
        return (
            <div className="counterContainer">
                <button className="minus" onClick={this.props.removeItemFromCart}>-</button>
                <input type="text" value={cart.quantity}/>
                <button className="plus" onClick={this.props.addItemToCart}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   
    return{
        products : state.products,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addItemToCart: product => dispatch(addItemToCart(product)),
        removeItemFromCart: product => dispatch(removeItemFromCart(product))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);