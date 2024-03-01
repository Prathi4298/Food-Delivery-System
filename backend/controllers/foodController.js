const Food = require('../models/Food');

// Controller methods for handling food-related operations

// Example method for fetching all food items
exports.getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
