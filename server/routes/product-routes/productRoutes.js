const express = require('express')
const router = express.Router()

const { 
    createProduct,
    getSingleProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
} = require('../../controllers/product-controller/productController')
const { isAdmin, authMiddleWare  } = require('../../middleware/authMiddleware')

router.post('/create', authMiddleWare, isAdmin, createProduct)

router.put('/:id' ,authMiddleWare, isAdmin, updateProduct)

router.get('/:id', getSingleProduct)
router.get('/', getAllProducts)

router.delete('/:id',authMiddleWare, isAdmin, deleteProduct)



module.exports = router