const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
       type:String,
       validate: [validator.isEmail,"Please enter a valid email"],
       unique: true,
   },
   password:{
      type:String,
      required:true,
   },
//    avatar:{
//     public_id:{
//         type:String,
//         required:true,
//     },
//     url:{ 
//         type:String,
//         required:true,
//     },
//    },
   role:{
       type:String,
       default: "user",
   },
   createdAt:{
     type: Date,
     default:Date.now(),
   },
   resetPasswordToken: String,
   resetPasswordTime: Date,
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
  
//Verify password
userSchema.methods.isPasswordMatch = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Hash password
/*userSchema.pre("save", async function(next){
     if (!this.isModified("password")) {
        next();
      }
    this.password = await bcrypt.hash(this.password,10);
});

// jwt token
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id}, jwt_secret, {
        expiresIn: jwt_exp
    });
};

// compare password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

// Forgot password
userSchema.methods.getResetToken = function(){
    // Generating token
   const resetToken = crypto.randomBytes(20).toString("hex");
    
//    hashing and adding resetPasswordToken to userSchema
this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

this.resetPasswordTime = Date.now() + 15 * 60 * 1000;

return resetToken;
}*/

const User = mongoose.model("User",userSchema);
module.exports = User;