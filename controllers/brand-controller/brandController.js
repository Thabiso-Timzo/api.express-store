const asyncHandler = require('express-async-handler')

const Brand = require('../../models/brand-model/brandModel')

// Create category
exports.createBrand = asyncHandler(
    async (req, res) => {
        try {
            const newCategory = await Brand.create(req.body)
            res.status(200).json(newCategory)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Update catergory
exports.updateBrand = asyncHandler(
    async (req, res) => {
        const { id } = req.params 
        try {
            const updatedCategory = await Brand.findByIdAndUpdate(id, req.body, { new: true })
            res.status(200).json(updatedCategory)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Delete category
exports.deleteBrand = asyncHandler(
    async (req, res) => {
        const { id } = req.params 
        try {
            const deletedCategory = await Brand.findByIdAndDelete(id)
            res.status(200).json(deletedCategory)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Fetch category
exports.getBrand = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const fetchCategory = await Brand.findById(id)
            res.status(200).json(fetchCategory)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Fetch all category
exports.getAllBrand = asyncHandler(
    async (req, res) => {
        try {
            const fetchCategories = await Brand.find()
            res.status(200).json(fetchCategories)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)