const asyncHandler = require('express-async-handler')
const slugify = require('slugify')

const Product = require('../../models/product-model/productModel')
  
// Create a product
exports.createProduct = asyncHandler(
    async (req, res) => {
        try {
            if (req.body.title) {
                req.body.slug = slugify(req.body.title)
            }
            const newProduct = await Product.create(req.body)
            res.status(200).json(newProduct)   
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Get a product
exports.getSingleProduct = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const getProduct = await Product.findById(id)
            res.status(200).json(getProduct)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Get all product
exports.getAllProducts = asyncHandler(
    async (req, res) => {
        try {
            // Filtering
            const queryObj = {...req.query}
            const excludeFields = ["page", "sort", "limit", "fields"]
            excludeFields.forEach((el) => delete queryObj[el])
            
            let queryStr = JSON.stringify(queryObj)
            queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
            
            let query = Product.find(JSON.parse(queryStr))

            // Sorting
            if (req.query.sort) {
                const sortBy = req.query.sort.split(",").join(" ")
                query = query.sort(sortBy)
            } else {
                query = query.sort("-createdAt")
            }

            // limiting the fields
            if (req.query.fields) {
                const fields = req.query.fields.split(",").join(" ")
                query = query.select(fields)
            } else {
                query = query.select('__v')
            }

            // Pagination
            const page = req.query.page
            const limit = req.query.limit
            const skip = (page - 1) * limit
            query = query.skip(skip).limit(limit)
            if (re.query.page) {
                const productCount = await Product.countDocuments()
                if (skip >= productCount) return res.json({  message: "This page does not exists" }) 
            }

            const product = await query 
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Update product
exports.updateProduct = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            if (req.body.title) {
                req.body.slug = slugify(req.body.title)
            }

            const updateProduct = await Product.findOneAndUpdate(id, req.body, {new: true})
            res.status(200).json(updateProduct)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }   
    }
)

// Delete product
exports.deleteProduct = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const deleteItem = await Product.findOneAndDelete(id)
            res.status(200).json(deleteItem)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// 3:37:36