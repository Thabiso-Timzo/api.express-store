const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user-schema/UserSchema');
const {generateToken} = require('../../utils/generateToken');

const {
    jwt_secret
} = require('../../config/index');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

exports.login = asyncHandler(
    async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (user && (await user.matchPassword(password))) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
                createdAt: user.createdAt
            })
        }

        if (!validateEmail(email)) {
            return res.status(400).json({message: 'Please enter a valid email address.'});
        }

        if (!user) {
            return res.status(401).json({message: 'Invalid email or password.'})
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    
})

exports.register = async (req, res ) => {
    const { name, email, password, avatar } = req.body;
    let existingUser;
     
    try {
        existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({msg: 'User already exists! Please login.'});
        }

        if (!validateEmail(email)) {
            return res.status(400).json({msg: 'Please enter a valid email address.'});
        }

        const user = new User({
            name,
            email,
            password,
            avatar
        })

        await user.save();

        return res.status(201).json({message: 'Registered successfully.'})
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

exports.getProfile = asyncHandler(
    async (req, res) => {
        try {
            // const user = await User.findById(req.user._id)
            const user = await User.findById(req.user)
            if (user) {
                res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    createdAt: user.createdAt
                })
            }

            if (!user) {
                return res.status(400).json({message: 'No user found'});    
            }
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
)

// Update profile
exports.updateUser = asyncHandler(
    async (req, res) => {
        try {
            // req.params.id
            const user = await User.findById(req.user._id);
            if (user) {
                user.name = req.body.name || user.name
                user.email = req.body.email || user.name
                if (req.body.password) {
                    user.password = req.body.password
                }
                const updatedUser = await user.save();
                res.json({
                    _id: updatedUser._id,
                    name: updatedUser.name,
                    email: updatedUser.email,
                    isAdmin: updatedUser.isAdmin,
                    createdAt: updatedUser.createdAt,
                    token: generateToken(updatedUser._id),
                })  
            }

            if (!user) {
                res.status(404).json({message: 'No user found.'});
            }
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
)


exports.getUserInfor = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')

        res.json(user)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
// 3:49:47
exports.getUsersAllInfor = async (req, res) => {
    try {
        const users = await Users.find().select('-password')

        res.json(users)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},

exports.updateUser = async (req, res) => {
    try {
        const {name, avatar} = req.body
        await Users.findOneAndUpdate({_id: req.user.id}, {
            name, avatar
        })

        res.json({msg: 'Update Success!'})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

exports.updateUsersRole = async (req, res) => {
    try {
        const {role} = req.body

        await Users.findOneAndUpdate({_id: req.params.id}, {
            role
        })

        res.json({msg: 'Update Success!'})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await Users.findByIdAndDelete(req.params.id)

        res.json({msg: 'Deleted Success!'})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}