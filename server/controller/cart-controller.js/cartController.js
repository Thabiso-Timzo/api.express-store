const asyncHandler = require('express-async-handler');

const Cart = require('../../models/cart-schema/cartSchema')

// add To Cart
exports.addToCart = asyncHandler(
    async (req, res) => {
        const {
            productName,
            quantity,
            productImage,
            productPrice,
            userId,
            productId,
            Stock,
        } = req.body

        const cart = await Cart.create({
            productName,
            quantity,
            productImage,
            productPrice,
            userId,
            productId,
            Stock,
        })
  
        res.status(200).json({
            success: true,
            cart,
        })
    }
)
  
// update Cart
exports.updateCart = asyncHandler(
    async (req, res) => {
        const {
            quantity,
        } = req.body;
        const cart = await Cart.findByIdAndUpdate(req.params.id);
  
        if (!cart) {
            return res.status(404).json({message: "No cart found with this id"})
        }
  
        await cart.update({
             quantity,
        });
    }
);
  
// get Cart Data
exports.getCartData = asyncHandler(
    async (req, res, next) => {
        const cartData = await Cart.find({ userId: req.user.id });
        
        res.status(200).json({
            success: true,
            cartData,
        });
    }
);
  
// remove Cart Data
exports.removeCartData = asyncHandler(
    async (req, res, next) => {
        const cartData = await Cart.findById(req.params.id);
  
        if (!cartData) {
            return res.status(404).json({message: "Items is not found with this id"})
        }
  
        await cartData.remove();
  
        res.status(200).json({
            success: true,
            message: "Item removed from cart",
        });
    }
);