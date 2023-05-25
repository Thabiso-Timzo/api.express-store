const express = require('express')
const router = express.Router()

const { 
    createCoupon,
    getAllCoupons,
    updateCoupon,
    deleteCoupon
} = require('../../controllers/coupon-controller/couponController')
const { isAdmin, authMiddleWare  } = require('../../middleware/authMiddleware')

router.post('/create', authMiddleWare, isAdmin, createCoupon)

router.get('/', authMiddleWare, isAdmin, getAllCoupons)

router.put('/:id', authMiddleWare, isAdmin, updateCoupon)

router.delete('/:id', authMiddleWare, isAdmin, deleteCoupon)

module.exports = router