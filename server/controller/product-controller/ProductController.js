const Product = require('../../models/Product-schema/ProductSchema');
const Features = require('../../utils/Features');

// Create Product  
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).json({
      success: true,
      product
    });
  } catch(err) {
    return res.status(500).json({msg: err.message});
  }
}

// Get all products
exports.allProducts = async(req, res) =>  {
  try {
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
  } catch(err) {
      return res.status(500).json({msg: err.message});
  }
}

// Update products
exports.updateProducts = async(req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({msg: 'Product is not found with this id'});
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
  } catch(err) {
      return res.status(500).json({msg: err.message});
  }
}

// Delete a product 
exports.deleteProduct = async(req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({msg: 'Product is not found with this id'})
    }

    await product.remove();

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully'
    })
  } catch(err) {
      return res.status(500).json({msg: err.message});
  }
}

// Get single product
exports.singleProduct = async(req, res) =>  {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({msg: 'Product is not found with this id'})
    }

    res.status(200).json({
        success: true,
        product,
    })
  } catch(err) {
      return res.status(500).json({msg: err.message});
  }
}

// Creat Review and update reviews
exports.createProductReview = async (req, res) => {
  try {
    const { rating, comment, productId } = req.body;

    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
      product.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });

    product.ratings = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
    });
  } catch(err) {
      return res.status(500).json({msg: err.message});
  } 
}

// Get all reviews of a single products
exports.getSingleProductReviews = async (req, res) => {
  try {
    const product = await Product.findById(req.query.id);

    if (!product) {
      return res.status(404).json({msg: 'Product is not found with this id'});
    }

    res.status(200).json({
        success: true,
        reviews: product.reviews
    })
  } catch(err) {
      return res.status(500).json({msg: err.message});
  }
}

// Delete Review --Admin
exports.deleteReview = async (req, res) => {
  try {
    const product = await Product.findById(req.query.productId);

    if (!product) {
      return res.status(404).json({msg: 'Product not found with this id'})
    }

    const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;

    reviews.forEach((rev) => {
      avg += rev.rating;
    });

    let ratings = 0;

    if (reviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / reviews.length;
    }

    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
    );

    res.status(200).json({
      success: true,
    });
  } catch(err) {
      return res.status(500).json({msg: err.message});
  } 
}