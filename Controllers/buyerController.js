const { con } = require("../Configuration/connectDb");



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


// artisan
module.exports = {
  register,
 getArtisans,
 getProducts,
 getOrder,
 getOneBuyerById,
getProductsByCategory,
getProductsByRegion
};
