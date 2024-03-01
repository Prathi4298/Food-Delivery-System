const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Define routes for food-related operations
router.get('/foods', foodController.getAllFoods);

module.exports = router;
