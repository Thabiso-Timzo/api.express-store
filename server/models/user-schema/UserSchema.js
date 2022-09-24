const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const crypto = require("crypto");
const { jwt_secret, jwt_exp } = require('../../config/index');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter your full name!"],
    },
    email:{
       type: String,
        required: [true, "Please enter your email!"],
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: [true,"Please enter your password!"]
    },
    avatar:{
        type: String,
        default: "https://res.cloudinary.com/du1lcyerz/image/upload/v1663846874/profile-icon-png-898_mxfyyf.png"
    },
    role:{
        type: Number,
        default: 0,
    },
    resetPasswordToken: String,
    resetPasswordTime: Date
}, {
    timestamps: true
});

// Hash password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});
  
// jwt token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, jwt_secret, {
      expiresIn: jwt_exp,
    });
};
  
// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
  
// Forgot password
userSchema.methods.getResetToken = function () {
    // Generating token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    //    hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordTime = Date.now() + 15 * 60 * 1000;
  
    return resetToken;
};

const User = mongoose.model("User",userSchema);
module.exports = User;