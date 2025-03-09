import React from "react";
import TechnicalDetails from "../components/ProductDetail/TechnicalDetails";
import AddToCart from "../components/ProductDetail/AddToCart";
import "../css/ProductDetail.css";
import BasicProductDetails from "../components/ProductDetail/BasicProductDetails"
const ProductDetail = () => {
    return (
        <>
            <div className="BPD">
                <div >
                    <BasicProductDetails />
                    <TechnicalDetails />
                </div>

                <div >
                    <AddToCart />
                </div>
            </div>
        </>
    )
}

export default ProductDetail