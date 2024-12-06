import React, { useEffect, useState } from 'react';
import { fetchCart } from '../services/api';

const Cart = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const loadCart = async () => {
            if (cart !== null) return;
            try {
                const { data } = await fetchCart();
                setCart(data);
                console.log("Fetched cart : ", data,cart)
            } catch (err) {
                console.error('Error fetching cart:', err);
            }
        };

        loadCart();
    }, []);
    console.log("Cart is",cart);
    if (!cart) {
        return <p>Loading cart...</p>;
    }

    const totalPrice = cart.products.reduce((total, item) => total + (item.product && item.product.price) * item.quantity, 0);

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cart.products.map((item) => (
                    <li key={item.prouct && item.product._id}>
                        {item.product && item.product.name} - {item.quantity} x ${item.product && item.product.price}
                    </li>
                ))}
            </ul>
            <p>Total: ${totalPrice}</p>
        </div>
    );
};

export default Cart;
