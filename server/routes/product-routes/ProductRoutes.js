const express = require('express');
const router = express.Router();

const { 
    allProducts, 
    createProduct,
    updateProducts,
    deleteProduct,
    singleProduct,
    createProductReview,
    getSingleProductReviews,
    deleteReview
} = require('../../controller/product-controller/ProductController');
const { isAuthenticatedUser, authorisedRoles } = require('../../middleware/auth');

router.post('/new', isAuthenticatedUser, authorisedRoles('admin'), createProduct);
router.post('/review', isAuthenticatedUser, createProductReview);

router.get('/', allProducts);
router.get('/:id', singleProduct);
router.get('/all/reviews', getSingleProductReviews);

router.put('/:id', isAuthenticatedUser, authorisedRoles('admin'),updateProducts);

router.delete('/:id', isAuthenticatedUser, authorisedRoles('admin'),deleteProduct);
router.delete('/all/reviews', isAuthenticatedUser, authorisedRoles('admin'), deleteReview);

module.exports = router;