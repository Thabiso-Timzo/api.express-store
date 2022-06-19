const asyncHandler = require('express-async-handler');
const Product = require('../../models/Product-schema/ProductSchema');
const ErrorHandler = require('../../utils/ErrorHandler');
const catchAsyncErrors = require('../../middleware/catchAsyncErrors');
const Features = require('../../utils/Features');

// Create Product  
const createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(200).json({
        success: true,
        product
    });
})

// Get all products
const allProducts = catchAsyncErrors(async(req, res) =>  {
    const resultPerPage = 8;

    const productCount = await Product.countDocuments();

    const feature = new Features(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    const products = await feature.query;

    res.status(200).json({
        sucess: true,
        products,
        productCount
    })
})

// Update products
const updateProducts = catchAsyncErrors(async(req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product is not found with this id', 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        sucess: true,
        product
    })
})

// Delete a product 
const deleteProduct = catchAsyncErrors(async(req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product is not found with this id', 404)); 
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Product deleted successfully'
    })
})

// Get single product
const singleProduct = catchAsyncErrors(async(req, res, next) =>  {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product is not found with this id', 404));
    }

    res.status(200).json({
        success: true,
        product,
    })
})

module.exports = {
    allProducts,
    createProduct,
    updateProducts,
    deleteProduct,
    singleProduct
}