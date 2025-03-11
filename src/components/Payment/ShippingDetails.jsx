import "../../css/ShippingDetails.css"
const ShippingDetails = () =>{
    return(
        <div className="Shipping-detail">
            <div className="SD-container">
                <label>User</label>
                <input type="text" value={"Quoc Bao"} readOnly />

                <label>Ship to</label>
                <div className="editable-input">
                    <input type="text" readOnly/>
                    <i className="bi bi-pencil edit-icon"></i>
                </div>
            </div>
            
        </div>
    )
}

export default ShippingDetails