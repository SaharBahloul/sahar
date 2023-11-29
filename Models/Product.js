// productModel.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Configuration/connectDb"); // Adjust the path as necessary

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Adjust the precision and scale as needed
      allowNull: false,
    },
    // Add more fields as needed
  },
  {
    timestamps: true,
    tableName: "product",
  }
);

module.exports = Product;
