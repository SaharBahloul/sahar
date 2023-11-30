// // orderModel.js

// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../Configuration/connectDb"); // Adjust the path as necessary

// const Order = sequelize.define(
//   "Order",
//   {
//     // Define your order fields here
//   },
//   {
//     timestamps: true,
//     tableName: "order",
//   }
// );

// module.exports = Order;

// const { con } = require("../Configuration/connectDb");

// // SQL statement to create the Order table
// const sql = `
// CREATE TABLE IF NOT EXISTS \`order\` (
//     orderId INT AUTO_INCREMENT PRIMARY KEY,
//     status VARCHAR(255) NOT NULL,
//     orderDate DATE NOT NULL,
//     paymentType VARCHAR(255) NOT NULL,
//     totalAmount DECIMAL(10, 2) NOT NULL,
//     buyerId INT,
//     productId INT,
//     FOREIGN KEY (buyerId) REFERENCES buyer(id),
//     FOREIGN KEY (productId) REFERENCES product(id)
// )`;

// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Order table created");
// });

// module.exports = con;

const { con } = require("../Configuration/connectDb");

const createOrderTable = () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS customerorder (
        orderId INT AUTO_INCREMENT PRIMARY KEY,
        status VARCHAR(255) NOT NULL,
        orderDate DATE NOT NULL,
        paymentType VARCHAR(255) NOT NULL,
        totalAmount DECIMAL(10, 2) NOT NULL,
        buyerId INT,
        productId INT,
        FOREIGN KEY (buyerId) REFERENCES buyer(id),
        FOREIGN KEY (productId) REFERENCES product(id)
    )`;

    con.query(sql, function (err, result) {
        if (err) {
            console.error("Error creating the order table: ", err);
            return;
        }
        console.log("customerorder table created");
    });
};

module.exports = createOrderTable;
