const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the current date when the order is created
  },
});

module.exports = { OrdersSchema };
