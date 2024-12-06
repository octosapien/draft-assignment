// Fetch all unique vendors from products
const Product = require('../models/Product')

exports.getAllVendors = async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from DB
        const vendorIds = [...new Set(products.map((product) => product.vendor))]; // Extract unique vendor IDs
        res.status(200).json(vendorIds); // Return unique vendor IDs
    } catch (err) {
        console.error("Error fetching vendors:", err); // Log the error
        res.status(500).json({ message: 'Error fetching vendors', error: err.message });
    }
};
