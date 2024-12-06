const Vendor = require("../models/Vendor");
const Product = require('../models/Product');

// Get products by vendor
exports.getProductsByVendor = async (req, res) => {
    try {
        const { vendorId } = req.params;
        const products = await Product.find({ vendor: vendorId });
        res.status(200).json(products);
    } catch (err) {
        console.error("Error fetching products by vendor:", err);
        res.status(500).json({ error: err.message });
    }
};

exports.getProductsByVendorId = async (req, res) => {
  const { vendorId } = req.params;

  try {
    // Fetch the vendor by ID and populate the products array
    const vendor = await Vendor.findById(vendorId).populate("products");

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    res.status(200).json(vendor.products);
  } catch (err) {
    console.error("Error fetching products by vendorId:", err);
    res.status(500).json({ message: "Error fetching products by vendorId", error: err.message });
  }
};

