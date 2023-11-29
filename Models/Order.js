// orderModel.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Configuration/connectDb"); // Adjust the path as necessary

const Order = sequelize.define(
  "Order",
  {
    // Define your order fields here
  },
  {
    timestamps: true,
    tableName: "order",
  }
);

module.exports = Order;
