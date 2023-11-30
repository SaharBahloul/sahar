

const express = require("express"); 
 const buyerRoute= express.Router(); 

 const { 

  register, // enter credentials /register
  getArtisans,  // list all artisans /artisans
  getProducts, // list all products /products
  //getOrder, // get buyer /order  /buyer/ordder
  //getOneBuyerById, //  get buyer profile
  //getProductsByCategory // search for products by category 

 
 } = require("../Controllers/buyerController"); 
 
 buyerRoute.post("/register", register);
 buyerRoute.get("/artisans", getArtisans); 
 buyerRoute.get("/products", getProducts); 
//  buyerRoute.get("/buyer/order",getOrder) ;
//  buyerRoute.get("/buyer/:id", getOneBuyerById); 
//  buyerRoute.get("/products/category",getProductsByCategory)

  //userRoute.put("/user/:id", putUser); 
  //userRoute.delete("/user/:id", deleteUser); 
 module.exports = buyerRoute; 
