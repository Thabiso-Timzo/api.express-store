const asyncHandler = require('express-async-handler')

const User = require('../../models/user-model/userModel')
const { generateToken } = require('../../utils/jwtToken')

// Register a user
exports.register = asyncHandler(
    async (req, res) => {
        const email = req.body.email

        const findUser = await User.findOne({email})
        if (!findUser) {
            // Create a new user
            const newUser = await User.create(req.body)
            res.status(200).json(newUser)
        } else {
            // User already exists
            res.status(409).json({ message :"User already exists" })
        }
    }
)

// Login  a user
exports.login = asyncHandler(
    async (req, res) => {
        const { email, password } = req.body

        // Check if user exists
        const findUser = await User.findOne({ email })
        if (findUser && findUser.isPasswordMatched(password)) {
            res.json({
                _id: findUser?._id,
                firstName: findUser?.firstName,
                lastName: findUser?.lastName,
                email: findUser?.email,
                mobile: findUser?.mobile,
                token: generateToken(findUser?._id)
            })
        } else {
            throw new Error("Invalid credentials")
        }
    }
)

// Get all users
exports.getAllUsers = asyncHandler(
    async (req, res) => {
        try {
            const getUsers = await User.find()
            res.status(200).json(getUsers)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    } 
)

// Get single user
exports.getSingleUser = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const getUser = await User.findById(id)
            res.status(200).json({getUser})
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Delete a  user
exports.deleteSingleUser = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const deleteUser = await User.findByIdAndDelete(id)
            res.status(200).json({deleteUser})
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Update a user
exports.updateUser = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const updateUser = await User.findByIdAndUpdate(
                id,
                {
                    firstName: req.body?.firstName,
                    lastName: req.body?.lastName,
                    email: req.body?.email,
                    mobile: req.body?.mobile
                },{ new: true }
            )
            res.status(200).json(updateUser)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)