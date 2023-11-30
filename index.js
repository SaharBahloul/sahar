const express = require("express"); 
const mysql = require('mysql2'); 
const buyerRoute = require("./Routes/buyerRoute"); 
const dotenv = require("dotenv"); 
const {connectD,con} = require("./Configuration/connectDb") 
const createBuyerTable = require("./Models/Buyer");
const createArtisanTable = require("./Models/Artisan")
const createCommentTable = require("./Models/Comment")
const createOrderTable = require("./Models/customerOrder")
const createOrderProduct = require("./Models/Product")
const createProductTable = require("./Models/Product");

var cors = require('cors') 
const app = express(); 
dotenv.config(); 


const port = process.env.PORT; 
 

app.use(cors()) 

app.use(express.json());

connectD().then(() => {
  // After a successful database connection, create the buyer table
  createBuyerTable();
  createArtisanTable();
  createProductTable() ;
  createCommentTable() ;
  createOrderTable() ;
  createOrderProduct() ;
 


  // Start the Express server
  app.listen(port, () => {
    console.log(`server is running on port ${port}`); 
  });

}).catch(err => {
  console.error('Failed to connect to the database:', err);
});


app.use("/api", buyerRoute); 

