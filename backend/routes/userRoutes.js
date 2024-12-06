const express = require('express');
const { registerUser, loginUser, getUserOrders } = require('../controllers/userController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/orders', auth, getUserOrders);
module.exports = router;
