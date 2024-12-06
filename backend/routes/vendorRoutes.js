const express = require('express');
const { getAllVendors, getVendorsByCategory } = require('../controllers/vendorController');
const router = express.Router();

router.get('/vendors', getAllVendors);
router.get('/vendors/:category', getVendorsByCategory);

module.exports = router;
