const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Please enter your name."],
        trim: true
    },
    email: {
        type:String,
        required: [true, "Please enter your email address."],
        trim:true,
        unique: true 
    },
    password: {
        type: String,
        required: [true, "Please enter your password."],
    },
    isAdmin : {
        type:Boolean,
        required: true,
        default: false
    },
    avatar:{
        type: String,
        default: "https://res.cloudinary.com/du1lcyerz/image/upload/v1663846874/profile-icon-png-898_mxfyyf.png"
    } ,
}, {
    timestamps: true
})

// Login
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Register
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
}) 

const User = mongoose.model('User', userSchema);
module.exports = User 