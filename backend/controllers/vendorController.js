// Fetch all unique vendors from products
const Product = require('../models/Product')
const Vendor = require("../models/Vendor");

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

exports.getVendorsByCategory = async (req, res) => {
  const { category } = req.params; // Get category from URL parameter

  try {
    // Fetch vendors by the category
    const vendorIds = await Vendor.find({ category });
    
    if (!vendorIds.length) {
      return res.status(404).json({ message: "No vendors found in this category" });
    }
    
    // Return vendors as a response
    res.status(200).json(vendorIds);
  } catch (err) {
    console.error("Error fetching vendors by category:", err);
    res.status(500).json({ message: "Error fetching vendors by category", error : err.message });
  }
};