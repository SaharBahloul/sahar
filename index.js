const express = require("express"); 
const buyerRoutes = require("./Routes/buyerRoutes"); 
const dotenv = require("dotenv"); 
const {connectD,con} = require("./Configuration/connectDb") 

const app = express(); 
dotenv.config(); 

const port = process.env.PORT; 
 
app.listen(port, (er) => { 
  if (er) { 
    console.log(err); 
  } else { 
    console.log(`server is running on port ${port}`); 
  } 
});

connectD(); 
app.use(express.json()) 
app.use("/api", buyerRoutes); 
