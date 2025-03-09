import React, { useState, useEffect } from "react";
import laptop from "../../assets/Laptop.jpg"
import "../../css/BasicProductDetails.css"

const BasicProductDetails = () => {
    const images = [laptop, laptop, laptop, laptop, laptop]
    const [mainImage, setMainImage] = useState(images[0]);
    return (
        <>
            <div className="BPD-container">
                <div className="BPD-gallery">
                    <div className="BPD-gallery-mainImg">
                        <img src={mainImage}></img>
                    </div>
                    <div className="BPD-gallery-subImg">
                        {images.map((image, index) => (
                            <img key={index} src={image} onClick={() => setMainImage(image)} className="subImage"></img>
                        ))}
                    </div>
                </div>

                <div className="BPD-details">
                    <h3>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</h3>

                    <div className="rating-section">
                        <span className="rating"><i className="bi bi-star-fill star-icon"></i> 4.9</span> <span className="stick">|</span> <span className="sold">Sold 125</span>
                    </div>

                    <div className="product-specs">
                        <ul>
                            <li><strong>Brand:</strong> <span>Apple</span></li>
                            <li><strong>Model Name:</strong> <span>MacBook Pro</span></li>
                            <li><strong>Screen Size:</strong> <span>13.3 Inches</span></li>
                            <li><strong>Hard Disk Size:</strong> <span>256 GB</span></li>
                            <li><strong>CPU Model:</strong> <span>Core i5</span></li>

                        </ul>

                    </div>

                </div>
            </div>
        </>
    )

}

export default BasicProductDetails