const User = require('../../models/user-schema/UserSchema');
const ErrorHandler = require('../../utils/ErrorHandler');
const catchAsyncErrors = require('../../middleware/catchAsyncErrors');
const sendToken = require('../../utils/jwtToken');
const sendMail = require('../../utils/sendMail');
const crypto = require("crypto");

// Register user
const createUser = catchAsyncErrors(async (req, res, next) => {
    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "https://test.com",
            url: "https://test.com"
        }
    })

    sendToken(user, 201, res);
})

// login user 
const loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler('Please enter your email and password.', 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler('User is not found with this email address and password.', 401));
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
        return next(new ErrorHandler('Your passwords do not match', 401));
    }

    sendToken(user, 201, res);
})

// Logout user
const logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Log out success'
    })
})

const forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({email: req.body.email});

    if (!user) {
        return next(new ErrorHandler('User not found with this email address', 404))
    }

    // Get resetPassword Token
    const resetToken = user.getResetToken();

    await user.save({
        validateBeforeSave: false
    })

    const resetPasswordUrl = `${req.protocol}://${req.get('host')}/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl}`;

    try {
        await sendMail({
            email: user.email,
            subject: `Gude Password Recovery`,
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} succesfully`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordTime = undefined;

        await user.save({
            validateBeforeSave: false
        })

        
        return next(new ErrorHandler(error.message, 500));
    }
})

// Reset Password
const resetPassword = catchAsyncErrors(async (req, res, next) => {
  // Create Token hash
  const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
  
  const user = await User.findOne({
      resetPasswordToken,
      resetPasswordTime: { $gt: Date.now()},
  })

  if (!user) {
      return next(new ErrorHandler('Reset password url is invalid or has been expired.', 400));
  }

  if (req.body.password !== req.body.confirmPassword) {
      return next(new ErrorHandler('Your passwords do not match.', 400));
  }

  user.password = req.body.password;

  user.resetPasswordToken = undefined;
  user.resetPasswordTime = undefined;

  await user.save();

  sendToken(user, 200, res);
})

// Get user Details
const userDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user
    })
})

// Update user Password
const updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatch = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatch) {
        return next(new ErrorHandler('Old password is incorrect.', 400));
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler('Your passwords do not match', 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res)
})

// Update user profile
const updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    // cloudinary later on
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    });

    res.status(200).json({
        sucess: true,
    })
})

// Get all users that
const getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        sucess: true,
        users
    })
})

// Get single user Details
const getSingleUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler('User not found with this id', 400));
    }

    res.status(200).json({
        sucess: true,
        user
    })
})

// Change user role
const updateUserRole = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    // cloudinary later on
    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    });

    res.status(200).json({
        sucess: true,
    })
})

// Delete user
const deleteUser = catchAsyncErrors(async (req, res, next) => {
    
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler('User not found with this id', 400));
    }

    await user.remove();

    res.status(200).json({
        sucess: true,
        message: 'User deleted successfully'
    })
})

module.exports = {
    createUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    userDetails,
    updatePassword,
    updateProfile,
    getAllUsers,
    getSingleUser,
    updateUserRole,
    deleteUser
}