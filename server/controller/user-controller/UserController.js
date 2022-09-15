const User = require('../../models/user-schema/UserSchema');
const Student = require('../../models/student-schema/StudentSchema');
const ErrorHandler = require('../../utils/ErrorHandler');
const catchAsyncErrors = require('../../middleware/catchAsyncErrors');
const sendToken = require('../../utils/jwtToken');
const sendMail = require('../../utils/sendMail');
const crypto = require("crypto");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')


var { jwt_secret, jwt_exp } = require('../../config/index') 

// Register user
const createUser = ([
    check("name", "Your name is required.").not().isEmpty(),
    check("email", "Please include a valid email address.").isEmail(),
    check("password", "Please enter a password with 6 or more  characters.").isLength({ min: 6 })
], 
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body;

        try {
            // if user exists
            let user = await User.findOne({ email })

            if (user) {
                res.status(400).json({ errors: [{ msg: "The user already exists."}] })
            }

            user = new User({
                name,
                email,
                password
            });

            // Encrypt the password
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();


            // Return a json web token
            const payload = {
                user: {
                    id: user.id,
                }
            };

            jwt.sign(payload, jwt_secret, { expiresIn: 3600000 }, (err, token) => {
                if (err) throw err;
                res.json({ token })
            })
        } catch (err) {
            console.error(err.message)
            res.status(500).send("Internal server error!!!")
        }
        // avatar: {
        //     public_id: "https://test.com",
        //     url: "https://test.com"
        // }
    }
)

const getMe = async (req, res) => {
 try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
 } catch (err) {
    console.error(err.message)
    res.status(500).send("Internal server error!!!")
 }
}


// login user 
const loginUser = ([
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required.").exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try {
        // if user exists
        let user = await User.findOne({ email })

        if (!user) {
            return res.status(400)
            .json({ errors: [{ msg: "Invalid credentials."}] })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400)
            .json({ errors: [{ msg: "Invalid credentials."}] })
        }

        // Return json web token
        const payload = {
            user: {
                id: user.id,
            }
        };

        jwt.sign(payload, jwt_secret, { expiresIn: jwt_exp }, (err, token) => {
            if (err) throw err;
            res.json({ token })
        })

    } catch(err) {
        console.error(err.message)
        res.status(500).send("Internal server error!!!")
    }
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

const checkIfStudent = catchAsyncErrors(async (req, res, next ) => {
    const {_user_id} = req.body;
    console.log(_user_id)
    Student.find({_student_id: _user_id}, (e, adv) => {
        if (e) {
            return res.status(200).json({
                err: true,
                msg: e,
                isStudent: false
            })
        } else {
            if (adv.length > 0) {
                return res.status(200).json({
                    err: false,
                    msg: 'User Is A Student',
                    isStudent: true
                })
            } else {
                return res.status(200).json({
                    err: true,
                    msg: 'User Not A Student',
                    isStudent: false
                })
            }
        }
    })
})

module.exports = {
    createUser,
    getMe,
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
    deleteUser,
    checkIfStudent
}