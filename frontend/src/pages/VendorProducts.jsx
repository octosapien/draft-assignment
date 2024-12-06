import React, { useEffect, useState } from 'react';
import { fetchProductsByVendor, addToCart } from '../services/api';
import ProductCard from '../components/ProductCard';

const VendorProducts = ({ vendorId }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProductsByVendor(vendorId).then((res) => setProducts(res.data));
    }, [vendorId]);

    const handleAddToCart = (productId) => {
        addToCart(productId).then(() => alert('Added to cart'));
    };

    return (
        <div>
            <h2>Products for Vendor {vendorId}</h2>
            {products.map((product) => (
                <ProductCard key={product._id} product={product} onAdd={handleAddToCart} onRemove={() => {}} />
            ))}
        </div>
    );
};

export default VendorProducts;
