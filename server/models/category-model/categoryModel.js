const mongoose = require('mongoose')

// Declare the Schema of the Mongo model
const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
}, { timestamps: true });

//Export the model
const Category = mongoose.model('Product-Category', categorySchema)
module.exports = Category