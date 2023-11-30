// // orderProductModel.js
// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../Configuration/connectDb"); // Adjust the path as necessary

// const OrderProduct = sequelize.define(
//   "OrderProduct",
//   {
//     quantity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     // Add more fields as needed
//   },
//   {
//     timestamps: true,
//     tableName: "order_product",
//   }
// );

// module.exports = OrderProduct;

const { con } = require("../Configuration/connectDb");

const createOrderProductTable = () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS orderProduct (
        id INT AUTO_INCREMENT PRIMARY KEY,
        orderId INT,
        productId INT,
        quantity INT,
        price DECIMAL(10, 2),
        FOREIGN KEY (orderId) REFERENCES \`order\`(id),
        FOREIGN KEY (productId) REFERENCES product(id)
    )`;

    con.query(sql, function (err, result) {
        if (err) {
            console.error("Error creating orderProduct table: ", err);
            return;
        }
        console.log("OrderProduct table created");
    });
};

module.exports = createOrderProductTable;
