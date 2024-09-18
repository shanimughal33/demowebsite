import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { products } from "../../products"; // Assuming this is where products are defined
import { Link } from 'react-router-dom';

const Checkout = () => {
    const carts = useSelector((state) => state.cart.items); // Getting cart items from Redux
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    // Fetch product details from productId in your cart
    const getProductDetails = (productId) => {
        return products.find((product) => product.id === productId); // Find the product based on the id
    };

    // Calculate total amount
    const totalAmount = carts.reduce(
        (total, item) => total + item.quantity * getProductDetails(item.productId).price,
        0
    );

    const handleInputChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        // Normally, this is where you'd send the order data to the server
        alert('Order Placed Successfully!');
    };

    return (
        <div className="min-h-screen px-5 py-10 bg-gray-100">
            <div className="max-w-5xl p-10 mx-auto bg-white rounded-lg shadow-lg">
                <h1 className="mb-8 text-3xl font-bold text-center">Checkout</h1>

                {/* Order Summary Section */}
                <div className="mb-10">
                    <h2 className="mb-4 text-2xl font-semibold">Order Summary</h2>
                    {carts.length === 0 ? (
                        <p className="text-gray-500">Your cart is empty</p>
                    ) : (
                        <ul className="space-y-4">
                            {carts.map((item, index) => {
                                const product = getProductDetails(item.productId);
                                return (
                                    <li key={index} className="flex items-center justify-between">
                                        <div>
                                            <p className="text-lg font-semibold">{product.name}</p>
                                            <p className="text-gray-500">Quantity: {item.quantity}</p>
                                        </div>
                                        <p className="text-lg font-semibold">${product.price * item.quantity}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>

                {/* Total Amount */}
                <div className="pt-4 mb-10 border-t">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">Total Amount:</h3>
                        <p className="text-xl font-semibold">${totalAmount}</p>
                    </div>
                </div>

                {/* User Details Form */}
                <div className="mb-10">
                    <h2 className="mb-4 text-2xl font-semibold">User Details</h2>
                    <form className="space-y-5" onSubmit={handleSubmitOrder}>
                        <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                            className="w-full p-3 border rounded-md"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={userDetails.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="w-full p-3 border rounded-md"
                            required
                        />
                        
                        <div className="grid grid-cols-2 gap-4">
                            
                            <input
                                type="text"
                                name="postalCode"
                                value={userDetails.postalCode}
                                onChange={handleInputChange}
                                placeholder="Postal Code"
                                className="w-full p-3 border rounded-md"
                                required
                            />
                        </div>

                        {/* Payment Method */}
                        <div className="mt-6">
                            <h2 className="mb-4 text-2xl font-semibold">Payment Method</h2>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="creditCard"
                                        checked={paymentMethod === 'creditCard'}
                                        onChange={handlePaymentChange}
                                        className="mr-2"
                                    />
                                    Credit Card
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="paypal"
                                        checked={paymentMethod === 'paypal'}
                                        onChange={handlePaymentChange}
                                        className="mr-2"
                                    />
                                    PayPal
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-10 text-center">
                            <Link to="/Addressform">
                                <button
                                    type="button"
                                    className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                >
                                    Next
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
