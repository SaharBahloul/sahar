// // artisanModel.js
// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../Configuration/connectDb"); // Adjust the path as necessary

// const Artisan = sequelize.define(
//   "Artisan",
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     // Add more fields as needed
//   },
//   {
//     timestamps: true, // Include timestamps (createdAt, updatedAt)
//     tableName: "artisan", // Set the table name if needed
//   }
// );

// module.exports = Artisan;
// const {con} = require("../Configuration/connectDb") 
// const sql = 
// "CREATE TABLE IF NOT EXISTS buyer (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255), address VARCHAR(255), email VARCHAR(255)), phonenumber VARCHAR(255)";     
 
// const artisan=  con.query(sql, function (err, result) { 
 
//          if (err) throw err; 
//          console.log("Table created"); 
//        }); 
//  module.exports= artisan; 
const { con } = require("../Configuration/connectDb");

const createArtisanTable = () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS artisan (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        bio TEXT,
        password VARCHAR(255),
        address VARCHAR(255),
        email VARCHAR(255),
        phonenumber VARCHAR(255),
        image VARCHAR(255) ,
        role ENUM('user', 'admin') DEFAULT 'admin'
    )`;

    con.query(sql, function (err, result) {
        if (err) {
            console.error("Error creating artisan table: ", err);
            return;
        }
        console.log("Artisan table created");
    });
};

module.exports = createArtisanTable;
