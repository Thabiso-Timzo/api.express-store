const express = require('express');
const router = express.Router();

const { 
    allProducts, 
    createProduct,
    updateProducts,
    deleteProduct,
    singleProduct
} = require('../../controller/product-controller/ProductController');

router.get('/', allProducts);
router.get('/:id', singleProduct)
router.post('/', createProduct);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProduct);

module.exports = router;