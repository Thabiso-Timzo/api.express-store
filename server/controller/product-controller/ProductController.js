const asyncHandler = require('express-async-handler');

const Product = require('../../models/Product-schema/ProductSchema');

// Fetch all products
exports.getAllProducts = asyncHandler(
  async (req, res) => {
    try {
      const products = await Product.find({});
      if (products) {
        res.status(200).json(products); 
      }

      if (!products) {
        res.status(404).json({msg: 'No Products were found.'})
      }
    } catch (error) {
      return res.status(500).json({message: error.message}); 
    }
  }
)

// Fetct product by id
exports.getSingleProduct = asyncHandler(
  async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.status(200).json(product);
      }

      if (!product) {
        res.status(404).json({message: 'No product was found.'})
      }
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  }
)