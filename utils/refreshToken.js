const jwt = require('jsonwebtoken')

const { jwt_secret } = require('../config/env/index')

const generateRefreshToken = (id) => {
    return jwt.sign({ id }, jwt_secret, { expiresIn: '3d'})
}

module.exports = { generateRefreshToken }