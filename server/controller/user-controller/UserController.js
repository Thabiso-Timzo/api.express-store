const User = require('../../models/user-schema/UserSchema');
const Student = require('../../models/student-schema/StudentSchema');
const asynHandler = require('express-async-handler');
const sendMail = require('../../utils/sendMail');
const crypto = require("crypto");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const { jwt_secret } = require('../../config/index')

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Register user
const createUser = asynHandler(async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ msg: "Please fill in all fields." })
        }
        
        if (!validateEmail(email)) {
            return res.status(400).json({ msg:  "Invalid email address."})
        } 

        const user = await User.findOne({email})
        if (user) return res.status(400).json({msg: "This email already exists."})

        if (password.length < 6)
            return res.status(400).json({ msg: "Password must be at least 6 characters." })

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPass
        const newUser = new User(req.body);

        const person = await newUser.save();
        const token = jwt.sign(
            { nam: person.name, id: person._id },
            jwt_secret,
            { expiresIn: '1d' }
        );
    
        res.status(200).json({ person, token });
    } catch (err) {
        return res.status(500).json({ msg: err.message } )
    }
})

// login user 
const loginUser =  asynHandler(async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });

        if (!email || !password) {
            return res.status(400).json({msg: 'Please enter the email & password'})
        }
  
        if (user) {
            const validity = await bcrypt.compare(password, user.password);
  
            if (!validity) {
                res.status(400).json('wrong password');
            } else {
                const token = jwt.sign(
                    { user: user.name, id: user._id },
                        jwt_secret,
                    { expiresIn: '1d' }
                );
                res.status(200).json({ user, token });
            }
        } else {
            res.status(404).json('User not found');
        }
    } catch (err) {
        res.status(500).json(err);
    }
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
    createUser,
    loginUser,
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