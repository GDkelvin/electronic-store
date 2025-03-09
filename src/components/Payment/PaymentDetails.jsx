import React from "react";
import "../../css/PaymentDetails.css"
const PaymentDetails = () => {
    return (
        <div className="PaymentDetails">
            <h3>Payment Details</h3>
            <div className="sub-total">
                <span>Subtotal</span>
                <span>$500</span>
            </div>
            <div className="discount">
                <span>Discount</span>
                <span>$500</span>
            </div>
            <hr></hr>
            <div className="grand-total">
                <span>Grand Total</span>
                <span>$500</span>
            </div>
            <button className="PTC">Proceed to checkout</button>
        </div>
    )
}

export default PaymentDetails