const mongoose = require('mongoose') // Erase if already required

// Declare the Schema of the Mongo model
var cartSchema = new mongoose.Schema({
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        count: {
            type: Number
        },
        color: {
            type: String,
        },
        price: {
            type: Number
        }
    }],
    cartTotal: {
        type: Number
    },
    totalAfterDiscount: {
        type: Number
    },
    orderBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

//Export the model
const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart