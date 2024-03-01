const Order = require('../models/Order');

// Example service methods for handling order-related operations

exports.placeOrder = async (orderData) => {
  try {
    const order = new Order(orderData);
    return await order.save();
  } catch (error) {
    throw error;
  }
};
