const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  //Check auth headers for bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1];

      //Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Get the user from the token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);

      //Not Authorized Status Code
      res.status(401);
      throw new Error("Not Authorized.");
    }
  }

  //If no token exists.
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized. No token found.");
  }
});

module.exports = { protect };
