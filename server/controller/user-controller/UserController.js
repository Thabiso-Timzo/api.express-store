const User = require('../../models/user-schema/UserSchema');
const Student = require('../../models/student-schema/StudentSchema');
const asynHandler = require('express-async-handler');
const sendMail = require('../../utils/sendMail');
const crypto = require("crypto");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendToken = require('../../utils/jwtToken')


const { jwt_secret } = require('../../config/index')

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// auth
const auth = asynHandler(async (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    });
});

// Register user
const createUser = asynHandler(async (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
})

// login user 
const loginUser =  asynHandler(async (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
})

// logout 
const logoutUser = asynHandler(async (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
})

//Forgot password
const forgotPassword = asynHandler(async (req, res) => {
    const user = await User.findOne({email: req.body.email});

    if (!user) {
        res.status(404).json({msg: 'User not found with this email address'})
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

        return res.status(500).json(error.message) 
    }
})

// Reset Password
const resetPassword = asynHandler(async (req, res) => {
   // Create Token hash
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
  
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordTime: { $gt: Date.now()},
    })

    if (!user) {
        return res.status(400).json({msg: 'Reset password url is invalid or has been expired.'})
    }

    if (req.body.password !== req.body.confirmPassword) {
        return res.status(400).json({msg: 'Your passwords do not match.'})
    }

    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordTime = undefined;

    user = await user.save();
    const token = jwt.sign(
        { user: user.password, id: user._id },
        jwt_secret,
        { expiresIn: '1h' }
    );

    res.status(200).json(user,token)
})

// Get user Details
const userDetails = asynHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user
    })
})

// Update user Password
const updatePassword = asynHandler(async (req, res) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatch = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatch) {
        return res.status(400).json({msg: 'Old password is incorrect.'})
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return res.status(400).json({msg: 'Your passwords do not match'})
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res)
})

// Update user profile
const updateProfile = asynHandler(async (req, res) => {
    try {
        const {name, avatar} = req.body
        await User.findOneAndUpdate({_id: req.user.id}, {
            name, avatar
        })

        res.json({msg: "Update Success!"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

// Get all users that
const getAllUsers = asynHandler(async (req, res) => {
    const users = await User.find();

    res.status(200).json({
        sucess: true,
        users
    })
})

// Get single user Details
const getSingleUser = asynHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(400).json({msg: 'User not found with this id'})
    }

    res.status(200).json({
        sucess: true,
        user
    })
})

// Change user role
const updateUserRole = asynHandler(async (req, res) => {
    const newUserData = {
        name: req.body.name,
        role: req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    });

    res.status(200).json({
        sucess: true,
        user
    })
})

// // Delete user
const deleteUser = asynHandler(async (req, res) => {
    
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(400).json({msg: 'User not found with this id'})
    }

    await user.remove();

    res.status(200).json({
        sucess: true,
        message: 'User deleted successfully'
    })
})

const checkIfStudent = asynHandler(async (req, res, next ) => {
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
    auth,
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
    deleteUser,
    checkIfStudent
}