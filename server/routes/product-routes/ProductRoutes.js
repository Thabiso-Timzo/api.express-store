const express = require('express');
const router = express.Router();

const { 
    allProducts, 
    createProduct,
    updateProducts,
    deleteProduct,
    singleProduct
} = require('../../controller/product-controller/ProductController');
const { isAuthenticatedUser, authorisedRoles } = require('../../middleware/auth');

router.get('/all', allProducts);
router.get('/single/:id', singleProduct)
router.post('/new', isAuthenticatedUser, authorisedRoles('admin'), createProduct);
router.put('/:id', isAuthenticatedUser, authorisedRoles('admin'),updateProducts);
router.delete('/:id', isAuthenticatedUser, authorisedRoles('admin'),deleteProduct);

module.exports = router;