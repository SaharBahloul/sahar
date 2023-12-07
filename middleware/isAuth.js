const jwt = require("jsonwebtoken");
require("dotenv").config();
const { con } = require("../Configuration/connectDb");

const isAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1]; // Assuming Bearer token
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Query to check if the user exists in the buyer table
    con.query("SELECT * FROM buyer WHERE id = ?", [decoded.id], function (err, result) {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server error" });
      }

      if (result.length === 0) {
        return res.status(401).json({ msg: "Invalid token: user does not exist" });
      }

      const foundUser = result[0];
      if (foundUser.role !== decoded.role) {
        return res.status(401).json({ msg: "Invalid token: role mismatch" });
      }

      req.user = foundUser;
      next();
    });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(401).json({ msg: "Token expired" });
    } else {
      res.status(500).json({ msg: "Server error" });
    }
  }
};

module.exports = isAuth;
