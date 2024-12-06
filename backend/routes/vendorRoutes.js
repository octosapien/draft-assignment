const express = require('express');
const { getAllVendors } = require('../controllers/vendorController');
const router = express.Router();

router.get('/vendors', getAllVendors);

module.exports = router;
