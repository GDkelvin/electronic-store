import React from "react";
import "../../css/ProductCard.css";
import laptopImg from "../../assets/laptop.jpg";
import line from "../../assets/line.png";
import { Link } from "react-router-dom";

const ProductCard = () => {
    return (
        <>
            <Link to="/product/1">
                <div className="product-card">
                    <div className="product-discount">-12%</div>
                        
                    <div className="product-image">
                        <img src={laptopImg} alt="Apple MacBook Air 15" />
                    </div>

                    <img src={line} alt="divider" className="line" />

                    <div className="product-info">
                        <p className="product-name">Laptop </p>

                        <div className="product-footer">
                            <span className="product-price">$2490.87</span>
                            <div className="product-rating">
                                <i className="bi bi-star-fill star-icon"></i>
                                <span className="rating-score">4.3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

        </>
    );
};

export default ProductCard;
