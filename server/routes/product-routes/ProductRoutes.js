const express = require('express');
const router = express.Router();

const { 
    allProducts, createProduct, updateProducts,
    deleteProduct, singleProduct, createProductReview,
    getSingleProductReviews, deleteReview
} = require('../../controller/product-controller/ProductController');
const {auth} = require('../../middleware/auth');
const authAdmin = require('../../middleware/authAdmin');

router.post('/new', auth, createProduct);
router.post('/review', auth, createProductReview);

router.get('/', allProducts);
router.get('/:id', singleProduct);
router.get('/review', getSingleProductReviews);

router.put('/:id', auth, authAdmin, updateProducts);

router.delete('/:id', auth, authAdmin, deleteProduct);
router.delete('/all/reviews', auth, authAdmin, deleteReview);

module.exports = router;