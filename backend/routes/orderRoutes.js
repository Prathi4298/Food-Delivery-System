const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define routes for order-related operations
router.post('/orders', orderController.placeOrder);

module.exports = router;
