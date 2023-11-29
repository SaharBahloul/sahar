// const { DataTypes } = require("sequelize");
// const sequelize = require("../Configuration/connectDb");

// const Buyer = sequelize.define("buyer", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phonenumber: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   image_profile: {
//     type: DataTypes.STRING,
//   },
// });

// module.exports = Buyer;

const {con} = require("../Configuration/connectDb") 
const sql = 
"CREATE TABLE IF NOT EXISTS buyer (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255), address VARCHAR(255), email VARCHAR(255)), phonenumber VARCHAR(255)";     
 
const buyer=  con.query(sql, function (err, result) { 
 
         if (err) throw err; 
         console.log("Table created"); 
       }); 
 module.exports= buyer; 
