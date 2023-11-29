// const express = require("express");
// const { register, login, logout } = require("../Controllers/buyerController");

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);
// router.post("/logout", logout);

// module.exports = router;

const express = require("express"); 
 const buyerRoutes = express.Router(); 
 const { 
 
  getArtisans, 
  register, 
  putUser,
  deleteUser, 
  getOneUserById, 
  getOneUserByName 
 
 } = require("../Controllers/buyerController"); 
 
  userRoute.get("/artisans", getArtisans); 
  userRoute.post("/register", register); 
  userRoute.get("/user", getOneUserByName); 
  userRoute.get("/user/:id", getOneUserById); 

  userRoute.put("/user/:id", putUser); 
  userRoute.delete("/user/:id", deleteUser); 
 module.exports = buyerRoutes; 
