const express = require('express')
const router = express.Router()

const { 
    createCategory, 
    updateCategory, 
    deleteCategory, 
    getCategory,
    getAllCategories
} = require('../../controllers/blog-category-controller/blogCategoryController')
const { isAdmin, authMiddleWare  } = require('../../middleware/authMiddleware')

router.post('/create', isAdmin, authMiddleWare, createCategory)

router.get('/all', getAllCategories)
router.get('/:id', getCategory)

router.delete('/:id', isAdmin, authMiddleWare, deleteCategory)

router.put('/:id', isAdmin, authMiddleWare, updateCategory)

module.exports = router