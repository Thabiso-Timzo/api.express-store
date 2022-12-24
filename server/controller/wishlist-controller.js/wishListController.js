const asyncHandler = require('express-async-handler');

const WishList = require('../../models/wishlist-schema/WishListSchema')

// Add to wishlist
exports.addToWishlist = asyncHandler(
    async (req, res) => {
        const {
            productName,
            quantity,
            productImage,
            productPrice,
            userId,
            productId,
            Stock,
        } = req.body;

        const wishList = await WishList.create({
            productName,
            quantity,
            productImage,
            productPrice,
            userId,
            productId,
            Stock,
        });
  
        res.status(200).json({
            success: true,
            wishList,
        });
    }
)
  
// get wishlistData Data
exports.getWishlistData = asyncHandler(
    async (req, res) => {
        const wishlistData = await WishList.find({ userId: req.user.id })
  
        res.status(200).json({
            success: true,
            wishlistData,
        })
    }
)
  
// remove wishlistData
exports.removeWishlistData = asyncHandler(
    async (req, res) => {
        const wishlistData = await WishList.findById(req.params.id);
  
        if (!wishlistData) {
            return res.status(400).json({message: "No wishlistData found with this id"})
        }
  
        await wishlistData.remove()
  
        res.status(200).json({
            success: true,
            message: "Item removed from wishlist",
        })
    }
)
  