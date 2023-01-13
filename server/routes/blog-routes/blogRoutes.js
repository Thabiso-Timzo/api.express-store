const express = require('express')
const router = express.Router()

const { 
    createBlog,
    updateBlog,
    getBlog,
    getAllBlogs,
    deleteBlog,
    likeBlog,
    dislikeBlog
} = require('../../controllers/blog-controller/blogController')
const { isAdmin, authMiddleWare  } = require('../../middleware/authMiddleware')

router.post('/create', authMiddleWare, isAdmin, createBlog)
router.put('/likes', authMiddleWare, likeBlog)
router.put('/dislikes', authMiddleWare, dislikeBlog)

router.get('/:id', getBlog)
router.get('/', getAllBlogs)

router.delete('/:id', authMiddleWare, isAdmin, deleteBlog)

router.put('/:id', authMiddleWare, isAdmin, updateBlog)

module.exports = router

// 5:10:23