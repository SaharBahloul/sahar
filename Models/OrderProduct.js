// orderProductModel.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Configuration/connectDb"); // Adjust the path as necessary

const OrderProduct = sequelize.define(
  "OrderProduct",
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Add more fields as needed
  },
  {
    timestamps: true,
    tableName: "order_product",
  }
);

module.exports = OrderProduct;
