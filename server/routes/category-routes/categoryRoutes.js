const express = require('express')
const router = express.Router()

const { 
    createCategory, 
    updateCategory, 
    deleteCategory, 
    getCategory,
    getAllCategories
} = require('../../controllers/category-controller/categoryController')
const { isAdmin, authMiddleWare  } = require('../../middleware/authMiddleware')

// test api
router.post('/create', isAdmin, authMiddleWare, createCategory)

// test api
router.get('/all', getAllCategories)
router.get('/:id', getCategory)

// test api
router.delete('/:id', isAdmin, authMiddleWare, deleteCategory)

// test api
router.put('/:id', isAdmin, authMiddleWare, updateCategory)

module.exports = router