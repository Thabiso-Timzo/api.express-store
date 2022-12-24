const mongoose = require("mongoose");

const wishListSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  productId:{
    type: String,
    required: true ,
  },
  Stock: {
    type: Number,
    required: true,
  }
});

const WishList = mongoose.model("Wishlist", wishListSchema)
module.exports = WishList 