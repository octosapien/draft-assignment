const express = require('express');
const { getProductsByVendor, getProductsByVendorId } = require('../controllers/productController');
const router = express.Router();

router.get('/:vendorId', getProductsByVendor);
router.get('/:vendorId', getProductsByVendorId);

module.exports = router;
