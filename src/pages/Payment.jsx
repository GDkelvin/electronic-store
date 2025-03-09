import React from "react";
import PaymentProductCard from "../components/Payment/PaymentProductCard";
import PaymentDetails from "../components/Payment/PaymentDetails";
import ShippingDetails from "../components/Payment/ShippingDetails";
import ContinueToPay from "../components/Payment/ContinueToPay";
import PaymentMethod from "../components/Payment/PaymentMethod";
const Payment = () => {
    return(
        <div className="payment">
            <PaymentProductCard></PaymentProductCard>
            <PaymentDetails></PaymentDetails>
            <ShippingDetails></ShippingDetails>
            <ContinueToPay></ContinueToPay>
            <PaymentMethod></PaymentMethod>
        </div>
    )
}

export default Payment