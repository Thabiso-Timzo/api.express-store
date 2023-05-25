const asyncHandler = require('express-async-handler')

const Category = require('../../models/category-model/categoryModel')


// Create category
exports.createCategory = asyncHandler(
    async (req, res) => {
        try {
            const newCategory = await Category.create(req.body)
            res.status(200).json(newCategory)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Update catergory
exports.updateCategory = asyncHandler(
    async (req, res) => {
        const { id } = req.params 
        try {
            const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true })
            res.status(200).json(updatedCategory)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Delete category
exports.deleteCategory = asyncHandler(
    async (req, res) => {
        const { id } = req.params 
        try {
            const deletedCategory = await Category.findByIdAndDelete(id)
            res.status(200).json(deletedCategory)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Fetch category
exports.getCategory = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const fetchCategory = await Category.findById(id)
            res.status(200).json(fetchCategory)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Fetch all category
exports.getAllCategories = asyncHandler(
    async (req, res) => {
        try {
            const fetchCategories = await Category.find()
            res.status(200).json(fetchCategories)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)