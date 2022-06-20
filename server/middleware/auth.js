const jwt = require('jsonwebtoken');

const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('./catchAsyncErrors');
const User = require('../models/user-schema/UserSchema');

const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler('Please login to access this pages', 401));
    } 

    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decodedData.id);

    next();
})

// Admin roles
const authorisedRoles = (...roles) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            return next(new ErrorHandler(`${req.user.role} cannot access this pages.`))
        }
        next();
    }
}

module.exports = {
    isAuthenticatedUser,
    authorisedRoles
}
 