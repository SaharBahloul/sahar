const { con } = require("../Configuration/connectDb");
const jwt = require("jsonwebtoken"); 


//register

const register = async (request, response) => {
  const user = request.body;

  try {
    con.connect(function (err) {
      if (err) throw err;
      con.query(
        "INSERT INTO buyer SET ?",
        user,
        function (err, result, fields) {
          if (err) throw err;
          response
            .status(200)
            .json({ employee: result, msg: " SUCCESS buyer Added" });
        }
      );
    });
  } catch (error) {
    response.status(500).json({ msg: "error on adding buyer" });
  }
};


// getArtisans

const getArtisans = async (request, response) => {
  try {
    con.connect(function (err) {
      if (err) throw err;
      con.query("SELECT * FROM artisan", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        response.status(200).json({ artisan: result });
      });
    });
  } catch (error) {
    response.status(500).json({ msg: "error on getting employees" });
  }
};


//get products

const getProducts = async (request, response) => {
  try {
    con.connect(function (err) {
      if (err) throw err;
      con.query("SELECT * FROM product", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        response.status(200).json({ product: result });
      });
    });
  } catch (error) {
    response.status(500).json({ msg: "error on getting products" });
  }
};


//getOrder
const getOrder = async (request, response) => {
  try {
    con.connect(function (err) {
      if (err) throw err;
      con.query("SELECT * FROM customerorder", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        response.status(200).json({ customerorder: result });
      });
    });
  } catch (error) {
    response.status(500).json({ msg: "error on getting products" });
  }
};



//getonebuyerbyID

const getOneBuyerById = async (request, response) => {
    const id = request.params.id;
    try {
      con.connect(function (err) {
        if (err) throw err;
        con.query(
          `SELECT * FROM buyer WHERE id= ${id}`,
          function (err, result) {
            if (err) throw err;
            console.log(result);
            response.status(200).json({ buyer: result });
          }
        );
      });
    } catch (error) {
      response.status(500).json({ msg: "error on getting buyer" });
    }
  };
  


//category
const getProductsByCategory = async (request, response) => {
  const category = request.query.category; // Accessing category from query parameters

  con.query(
    "SELECT * FROM product WHERE `category` = ?",
    [category],
    function (err, result) {
      if (err) {
        console.error(err);
        return response.status(500).json({ msg: "error on getting product" });
      }
      response.status(200).json({ product: result });
    }
  );
};

//region
const getProductsByRegion = async (request, response) => {
  const region = request.query.region; // Accessing category from query parameters

  con.query(
    "SELECT * FROM product WHERE `region` = ?",
    [region],
    function (err, result) {
      if (err) {
        console.error(err);
        return response.status(500).json({ msg: "error on getting product" });
      }
      response.status(200).json({ product: result });
    }
  );
};
//signin
const signIn = async (req, res) => {
  const { email, password } = req.body;

  // Query to find user by email
  const query = "SELECT * FROM buyer WHERE email = ?";
  
  con.query(query, [email], function (err, result) {
      if (err) {
          console.error(err);
          return res.status(500).json({ msg: "Server error" });
      }

      // Check if user is found
      if (result.length > 0) {
          const foundUser = result[0];

          // Password check (Assuming plain text passwords for simplicity)
          if (password === foundUser.password) {
              // Create JWT token
              const token = jwt.sign(
                  { id: foundUser.id, role: foundUser.role },
                  process.env.JWT_SECRET
              );
              res.status(200).json({ user: foundUser, token: token });
          } else {
              res.status(400).json({ msg: "Wrong password" });
          }
      } else {
          res.status(400).json({ msg: "User not registered" });
      }
  });
};


//delete 
const deleteUser = async (req, res) => {
  const id = req.params.id;

  con.query(
    "DELETE FROM buyer WHERE id = ?",
    [id],
    function (err, result) {
      if (err) {
        console.error("Error on deleting user:", err);
        return res.status(500).json({ msg: "Error on deleting user", error: err.message });
      }
      // Check if any row was actually deleted
      if (result.affectedRows > 0) {
        res.status(200).json({ msg: "User deleted successfully" });
      } else {
        res.status(404).json({ msg: "User not found" });
      }
    }
  );
};

const putUser = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  // Constructing the SQL query
  let query = "UPDATE buyer SET ";
  let queryParams = [];

  // Dynamically create the query and parameters based on the provided data
  Object.keys(updatedData).forEach((key, index, array) => {
    query += `${key} = ?`;
    queryParams.push(updatedData[key]);
    if (index < array.length - 1) query += ", ";
  });

  query += " WHERE id = ?";
  queryParams.push(id);

  // Execute the query
  con.query(query, queryParams, function (err, result) {
    if (err) {
      console.error("Error on updating user:", err);
      return res.status(500).json({ msg: "Error on updating user", error: err.message });
    }
    // Check if any row was actually updated
    if (result.affectedRows > 0) {
      res.status(200).json({ msg: "User updated successfully" });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  });
};



//put
// artisan
module.exports = {
  register,
 getArtisans,
 getProducts,
 getOrder,
 getOneBuyerById,
getProductsByCategory,
getProductsByRegion,
signIn, deleteUser ,
putUser
};
