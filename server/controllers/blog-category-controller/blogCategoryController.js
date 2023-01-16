const asyncHandler = require('express-async-handler')

const BlogCategory = require('../../models/blog-catergory-model/blogCategoryModel')


// Create category
exports.createCategory = asyncHandler(
    async (req, res) => {
        try {
            const newCategory = await BlogCategory.create(req.body)
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
            const updatedCategory = await BlogCategory.findByIdAndUpdate(id, req.body, { new: true })
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
            const deletedCategory = await BlogCategory.findByIdAndDelete(id)
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
            const fetchCategory = await BlogCategory.findById(id)
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
            const fetchCategories = await BlogCategory.find()
            res.status(200).json(fetchCategories)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)