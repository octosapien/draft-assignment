import React, { useEffect, useState } from 'react';
import { fetchCart } from '../services/api';

const Cart = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        fetchCart().then((res) => setCart(res.data));
    }, []);

    if (!cart) return <p>Loading...</p>;

    const totalPrice = cart.products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const discount = totalPrice > 100 ? 10 : 0;
    const netPayable = totalPrice - discount;

    return (
        <div>
            <h2>s  Cart</h2>
            {cart.products.map(({ product, quantity }) => (
                <div key={product._id}>
                    <h3>{product.name}</h3>
                    <p>Quantity: {quantity}</p>
                </div>
            ))}
            <p>Total: ${totalPrice}</p>
            <p>Discount: ${discount}</p>
            <p>Net Payable: ${netPayable}</p>
            <button>Pay and Place Order</button>
        </div>
    );
};

export default Cart;
