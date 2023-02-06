const express = require('express')
const router = express.Router()

const { 
    register,
    login,
    getAllUsers,
    getSingleUser,
    deleteSingleUser,
    updateUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    Adminlogin,
    getWishList,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus
} = require('../../controllers/user-controller/userController')
const { authMiddleWare, isAdmin } = require('../../middleware/authMiddleware')

router.post('/register', register)
router.post('/login', login)
router.post('/admin-login', Adminlogin)
router.post('/cart', userCart)
router.post('/forgot-password-token', forgotPasswordToken)
router.post('/cart/apply-coupon', authMiddleWare, applyCoupon)
router.post('/cart/cash-order', authMiddleWare, createOrder)

router.get('/refresh', handleRefreshToken)
router.get('/logout', logout)
router.get('/all', getAllUsers)
router.get('/cart', authMiddleWare, getUserCart)
router.get('/wishlist', authMiddleWare, getWishList)
router.get('/get-orders', authMiddleWare, getOrders)
router.get('/:id' ,authMiddleWare, getSingleUser)

router.put('/order/update-order/:id', authMiddleWare, isAdmin, updateOrderStatus)
router.put('/reset-password/:token', resetPassword)

router.delete('/empty-cart', authMiddleWare, emptyCart)
router.delete('/:id', deleteSingleUser)

router.put('/save-address', authMiddleWare, saveAddress)
router.put('/update-password', authMiddleWare, updatePassword)
router.put('/update-user', authMiddleWare, updateUser)
router.put('/blocked-user/:id', authMiddleWare, isAdmin, blockUser)
router.put('/unblocked-user/:id', authMiddleWare, isAdmin, unblockUser)

module.exports = router