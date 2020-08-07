import React, { Component } from 'react';

import './Home.css';
import CardProduct from '../components/CardProduct';

class Home extends Component {
    render() {
        return (
            <>
                <h1>ini adalah halaman home</h1>
                <div className="cardContainer">
                    <CardProduct />
                </div>
            </>
        )
    }
}

export default Home;