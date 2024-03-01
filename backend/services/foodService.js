const Food = require('../models/Food');

// Example service methods for handling food-related operations

exports.getAllFoods = async () => {
  try {
    return await Food.find();
  } catch (error) {
    throw error;
  }
};
