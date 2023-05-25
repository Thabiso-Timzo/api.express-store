const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const User = require('../models/user-model/userModel')
const { jwt_secret } = require('../config/env/index')

const authMiddleWare = asyncHandler(
    async (req, res, next) => {
        let token
        if (req?.headers?.authorization?.startsWith('Bearer')) {
            token = req.headers.authorization.split(" ")[1]
            try {
                if (token) {
                    const decoded = jwt.verify(token, jwt_secret)
                    console.log(decoded)
                    const user = await User.findById(decoded?.id)
                    req.user = user
                    next()
                }
            } catch (error) {
                res.json({ message: "Not authorised, token expired. Login again!!" })
            }
        } else {
            res.json({ message: "There is no token attached to the header!"})
        }
    }
)

const isAdmin = asyncHandler(
    async (req, res, next) => {
        const { email } = req.user
        try {
            const adminUser = await User.findOne({ email })
            if (adminUser.role !== "admin") {
                res.json({ message: "You are not an admin" })
            } else {
                next()
            }
        } catch (error) {
            res.status(500).json({ message: error.message })    
        }
    }
)

module.exports = { authMiddleWare, isAdmin }