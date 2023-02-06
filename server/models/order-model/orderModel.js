const mongoose = require('mongoose') // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        count: {
            type: Number
        },
        color: {
            type: String
        },
    }],
    paymentIntent: {},
    orderStatus: {
        type: String,
        default: "Not processed",
        enum: ["Not processed", "Cash on Delivery", "Processing", "Dispatched", "Cancelled", "Delivered"]
    },
    orderBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

//Export the model
const Order = mongoose.model('Order', orderSchema)
module.exports = Order