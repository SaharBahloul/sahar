// // productModel.js
// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../Configuration/connectDb"); // Adjust the path as necessary

// const Product = sequelize.define(
//   "Product",
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.DECIMAL(10, 2), // Adjust the precision and scale as needed
//       allowNull: false,
//     },
//     // Add more fields as needed
//   },
//   {
//     timestamps: true,
//     tableName: "product",
//   }
// );

// module.exports = Product;

const { con } = require("../Configuration/connectDb");

const createProductTable = () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS product (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        category VARCHAR(255),
        region VARCHAR(255),
        price DECIMAL(10, 2),
        description TEXT,
        image  VARCHAR(255),
        artisanId INT,
        qte INT,
        rating int ,
        FOREIGN KEY (artisanId) REFERENCES artisan(id)
    )`;

    con.query(sql, function (err, result) {
        if (err) {
            console.error("Error creating product table: ", err);
            return;
        }
        console.log("Product table created");
    });
};

module.exports = createProductTable;
