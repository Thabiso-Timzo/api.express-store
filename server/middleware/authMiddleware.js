const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const User = require('../models/user-model/userModel')
const { jwt_secret } = require('../config/env/index')

exports.authMiddleWare = asyncHandler(
    async (req, res, next) => {
        let token
        if (req?.headers?.authorization?.startsWith('Bearer')) {
            token = req.headers.authorization.split(" ")[1]
            try {
                if (token) {
                    const decoded = jwt.verify(token, jwt_secret)
                    const user = await User.findById(decoded?.id)
                    res.user = user
                    next()
                }
            } catch (error) {
                res.json({ message: "Not authorised, token expired. Login again!!" })
            }
        } else {
            res.status(404).json({ message: "No token found!"})
        }
    }
)

exports.isAdmin = asyncHandler(
    async (req, res, next) => {
        const { email } = req.user
        const adminUser = await User.findOne({ email })
        if (adminUser.role !== 'admin') {
            res.json({ message: "You are not an admin" })
        } else {
            next()
        }
    }
)