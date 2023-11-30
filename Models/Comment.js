// // reviewModel.js
// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../Configuration/connectDb"); // Adjust the path as necessary

// const Review = sequelize.define(
//   "Review",
//   {
//     rating: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     comment: {
//       type: DataTypes.TEXT,
//       allowNull: true,
//     },
//     // Add more fields as needed
//   },
//   {
//     timestamps: true,
//     tableName: "review",
//   }
// );

// module.exports = Review;

const { con } = require("../Configuration/connectDb");

const createCommentTable = () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS comment (
        id INT AUTO_INCREMENT PRIMARY KEY,
        text TEXT,
        artisanProductId INT,
        FOREIGN KEY (artisanProductId) REFERENCES product(id)
    )`;

    con.query(sql, function (err, result) {
        if (err) {
            console.error("Error creating comment table: ", err);
            return;
        }
        console.log("Comment table created");
    });
};

module.exports = createCommentTable;
