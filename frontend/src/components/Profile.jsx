import React, { useEffect, useState } from 'react';
import { fetchUserOrders } from '../services/api';

const Profile = () => {
    const [user, setUser] = useState({});
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Assume user details are stored in localStorage
        const userDetails = JSON.parse(localStorage.getItem('user'));
        setUser(userDetails);

        fetchUserOrders().then((res) => setOrders(res.data));
    }, []);

    return (
        <div>
            <h2>Profile</h2>
            <p>Name: {user.username}</p>
            <p>Email: {user.email}</p>

            <h3>Order History</h3>
            {orders.map((order) => (
                <div key={order._id}>
                    <p>Order ID: {order._id}</p>
                    <p>Status: {order.status}</p>
                </div>
            ))}
        </div>
    );
};

export default Profile;
