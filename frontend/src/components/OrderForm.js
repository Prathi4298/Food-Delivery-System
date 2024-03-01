import React, { useState } from 'react';

const OrderForm = ({ handleOrder }) => {
    const [foodId, setFoodId] = useState('');
    const [addressId, setAddressId] = useState('');
    const [paymentMode, setPaymentMode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleOrder({ foodId, addressId, paymentMode });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Food ID:</label>
                <input type="text" value={foodId} onChange={(e) => setFoodId(e.target.value)} />
            </div>
            <div>
                <label>Address ID:</label>
                <input type="text" value={addressId} onChange={(e) => setAddressId(e.target.value)} />
            </div>
            <div>
                <label>Payment Mode:</label>
                <input type="text" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} />
            </div>
            <button type="submit">Place Order</button>
        </form>
    );
};

export default OrderForm;
