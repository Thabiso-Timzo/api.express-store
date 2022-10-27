const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        //required: [true, "Please enter your name."],
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
    role : {
        type:Number,
        default: 0 
    },
    avatar:{
        type: String,
        default: "https://res.cloudinary.com/du1lcyerz/image/upload/v1663846874/profile-icon-png-898_mxfyyf.png"
    } ,
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User 