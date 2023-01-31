const asyncHandler = require('express-async-handler')

const Coupon = require('../../models/coupon-model/couponModel')

// Create coupon
exports.createCoupon = asyncHandler(
    async (req, res) => {
        try {
            const newCoupon = await Coupon.create(req.body)
            res.status(200).json(newCoupon)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Create coupon
exports.getAllCoupons = asyncHandler(
    async (req, res) => {
        try {
            const coupons = await Coupon.find()
            res.status(200).json(coupons)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Update coupon
exports.updateCoupon = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {  new: true})
            res.status(200).json(updateCoupon)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Delete coupon
exports.deleteCoupon = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const deleteCoupon = await Coupon.findByIdAndDelete(id)
            res.status(200).json(deleteCoupon)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)