import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import VendorProducts from './pages/VendorProducts';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Login from './pages/Login';
import { fetchVendors } from './services/api';

const App = () => {
    const [vendors, setVendors] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState(null);

    useEffect(() => {
        const loadVendors = async () => {
            try {
                const { data } = await fetchVendors();
                console.log(data);
                setVendors(data);
                setSelectedVendor(data[0]); // Default to the first vendor
            } catch (err) {
                console.error('Error loading vendors:', err);
            }
        };

        loadVendors();
    }, []);

    return (
        <Router>
            <Navbar
                vendors={vendors}
                onVendorClick={(vendor) => setSelectedVendor(vendor)}
            />
            <Routes>
                {selectedVendor && (
                    <Route path="/" element={<VendorProducts vendorId={selectedVendor} />} />
                )}
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
