// reviewModel.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Configuration/connectDb"); // Adjust the path as necessary

const Review = sequelize.define(
  "Review",
  {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // Add more fields as needed
  },
  {
    timestamps: true,
    tableName: "review",
  }
);

module.exports = Review;
