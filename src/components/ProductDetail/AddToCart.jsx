import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/AddToCart.css"
const AddToCart = () => {
    return (
        <div className="ATC-container">
            <div className="ATC-container-2">
                <div className="ATC-price">
                    <span className="price">$1299.00</span>
                    <span className="sale">-12%</span>
                </div>
                <p className="ATC-last-price">last price $1410.87</p>

                <Link to="/cart"><button className="buy">Buy now</button></Link>
                <button className="add-to-cart">Add to cart</button>

            </div>
        </div>

    )
}

export default AddToCart