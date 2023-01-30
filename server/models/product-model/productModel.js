const mongoose = require('mongoose')

// Product schema 
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    qauntity: {
        type: Number,
        required: true,
        select: false
    },
    sold: {
        type: Number,
        default: 0,
        select: false
    },
    images: {
        type: Array,
    },
    color: {
        type: String,
        required: true
    },
    ratings: [{
        star: Number,
        comment: {
            type: String
        },
        postedBy: { 
            type: mongoose.Schema.Types.ObjectId ,
            ref: "User"
        }
    }],
    totalratings: {
        type: String,
        default: 0
    }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)
module.exports = Product