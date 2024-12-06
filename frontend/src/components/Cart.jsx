import React, { useEffect, useState } from 'react';
import { fetchCart } from '../services/api';

const Cart = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const loadCart = async () => {
            try {
                const { data } = await fetchCart();
                setCart(data);
            } catch (err) {
                console.error('Error fetching cart:', err);
            }
        };

        loadCart();
    }, []);

    if (!cart) return <p>Loading cart...</p>;

    const totalPrice = cart.products.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cart.products.map((item) => (
                    <li key={item.product._id}>
                        {item.product.name} - {item.quantity} x ${item.product.price}
                    </li>
                ))}
            </ul>
            <p>Total: ${totalPrice}</p>
        </div>
    );
};

export default Cart;
