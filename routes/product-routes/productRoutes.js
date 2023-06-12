const express = require('express')
const router = express.Router()

const { 
    createProduct,
    getSingleProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    addToWishList,
    rating,
    uploadImages
} = require('../../controllers/product-controller/productController')
const { isAdmin, authMiddleWare  } = require('../../middleware/authMiddleware')
const { uploadPhoto, productImgResize } = require('../../middleware/uploadsImages')

router.get('/', getAllProducts)
router.post('/create', authMiddleWare, isAdmin, createProduct)
router.put('/uploads/:id', authMiddleWare, isAdmin, uploadPhoto.array('images', 10), productImgResize, uploadImages)

router.put('/wishlist', authMiddleWare,  addToWishList)
router.put('/rating', authMiddleWare, rating)
router.put('/:id' ,authMiddleWare, isAdmin, updateProduct)

router.get('/:id', getSingleProduct) 


router.delete('/:id',authMiddleWare, isAdmin, deleteProduct)

module.exports = router
