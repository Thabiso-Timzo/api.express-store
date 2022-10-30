const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const User = require('../models/user-schema/UserSchema')
const { jwt_secret } = require('../config/index');

const auth = asyncHandler(
  async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, jwt_secret);
      
      req.user = await User.findById(decoded.id).select("-password");
      next()
    } catch (error) {
      res.status(401).json({message: 'You not authorised, token failed.'})
    }
  } 

  if (!token) {
      res.status(401).json({message: 'You not authorised to access this page.'})
    }
})



module.exports = {
  auth
} 