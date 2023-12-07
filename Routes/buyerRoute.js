

const express = require("express"); 
 const buyerRoute= express.Router(); 

 const { 

  register, // enter credentials /register
  getArtisans,  // list all artisans /artisans
  getProducts, // list all products /products
  getOrder, // get buyer /order  /buyer/ordder
  getOneBuyerById, //  get buyer profile
  getProductsByCategory ,// search for products by category 
  getProductsByRegion,
  signIn,
  deleteUser, 
  putUser

 } = require("../Controllers/buyerController"); 
 
 buyerRoute.post("/register", register);
 buyerRoute.get("/artisans", getArtisans); 
 buyerRoute.get("/products", getProducts); 
 buyerRoute.get("/order",getOrder) ;
  buyerRoute.get("/buyer/:id", getOneBuyerById); 
buyerRoute.get("/products/category",getProductsByCategory) ;
buyerRoute.get("/products/region",getProductsByRegion) ;
buyerRoute.post("/signIn", signIn); 
buyerRoute.delete("/buyer/:id", deleteUser); 
buyerRoute.put("/buyer/:id", putUser);

  
 module.exports = buyerRoute; 
