const express = require('express');
const router = express.Router();

const { 
    getAllProducts, getSingleProduct
} = require('../../controller/product-controller/ProductController');
const {auth} = require('../../middleware/auth');
const authAdmin = require('../../middleware/authAdmin');

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);

module.exports = router;