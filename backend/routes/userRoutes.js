const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for user-related operations
router.get('/users', userController.getAllUsers);

module.exports = router;
