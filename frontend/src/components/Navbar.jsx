import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ vendors, onVendorClick }) => {
    return (
        <nav>
            {vendors.map((vendor, index) => (
                <button key={index} onClick={() => onVendorClick(vendor)}>
                    {vendor}
                </button>
            ))}
            <Link to="/cart">eCart</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    );
};

export default Navbar;
