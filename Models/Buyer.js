// const {con} = require("../Configuration/connectDb") 
// const sql = 
// "CREATE TABLE IF NOT EXISTS buyer (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255), address VARCHAR(255), email VARCHAR(255)), phonenumber VARCHAR(255)";     
 
// const buyer=  con.query(sql, function (err, result) { 
 
//          if (err) throw err; 
//          console.log("Table created"); 
//        }); 
//  module.exports= buyer; 
const { con } = require("../Configuration/connectDb");

const createBuyerTable = () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS buyer (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        password VARCHAR(255),
        address VARCHAR(255),
        email VARCHAR(255),
        phonenumber VARCHAR(255) ,
        creditcardnumber VARCHAR(255)
    )`;

    con.query(sql, function (err, result) {
        if (err) {
            console.error("Error creating table: ", err);
            return;
        }
        console.log("Buyer table created");
    });
};

module.exports = createBuyerTable;

