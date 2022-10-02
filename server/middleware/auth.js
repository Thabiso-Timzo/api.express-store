const jwt = require('jsonwebtoken');
const { access_secret } = require('../config/index');

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(400).json({msg: "Invalid authentication."});

    jwt.verify(token, access_secret, (err, user) => {
      if (err) return res.status(400).json({msg: "Invalid authentication."});

      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({msg: err.message});
  }
}

module.exports = auth;