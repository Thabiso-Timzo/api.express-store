const jwt = require('jsonwebtoken');

const { jwt_secret } = require('../config/index');

const generateToken = userId => {
  return jwt.sign({ id: userId }, jwt_secret, {
    expiresIn: '30d',
  });
};

module.exports = generateToken;