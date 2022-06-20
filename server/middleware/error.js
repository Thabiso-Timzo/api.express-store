const ErrorHandler = require('../utils/ErrorHandler');

const errorCatcher= (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error";

    // wrong mongodb id error
    if (err.name === "CastError") {
        const message = `Resources not found with this id...Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }

    // Wrong Jwt error
    if (err.code === "jsonWebTokenError") {
        const message = `Your url is invalid, please try again.`;
        err = new ErrorHandler(message, 400);
    }

    // Jwt expired error
    if (err.code === "TokenExpiredError") {
        const message = `Your url has expired, please try again.`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
}

module.exports = errorCatcher;