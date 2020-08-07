import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import './Navbar.css'

const Navbar = ({cart}) => {
    const dataCart = cart.length;
    return (
        <div className="Navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart"><i className="fas fa-shopping-cart fa-lg"></i></Link>
                    <span className="badge">{`(${dataCart})`}</span>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps)(Navbar);
