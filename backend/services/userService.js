const User = require('../models/User');

// Example service methods for handling user-related operations

exports.getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    throw error;
  }
};
