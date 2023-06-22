const asyncHandler = require('express-async-handler')
const slugify = require('slugify')
const fs = require('fs')

const Product = require('../../models/product-model/productModel')
const User = require('../../models/user-model/userModel')
const { cloudinaryUploads } = require('../../utils/cloudinary')

// Create a product
exports.createProduct = asyncHandler(
    async (req, res) => {
        try {
            if (req.body.title) {
                req.body.slug = slugify(req.body.title)
            }
            const newProduct = await Product.create(req.body)
            res.status(200).json(newProduct)   
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Get a product
exports.getSingleProduct = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const getProduct = await Product.findById(id).populate('color')
            res.status(200).json(getProduct)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Get all product
exports.getAllProducts = asyncHandler(
    async (req, res) => {
        try {
            // Filtering
            const queryObj = { ...req.query };
            const excludeFields = ["page", "sort", "limit", "fields"];
            excludeFields.forEach((el) => delete queryObj[el]);
            let queryStr = JSON.stringify(queryObj);
            queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

            let query = Product.find(JSON.parse(queryStr));

            // Sorting

            if (req.query.sort) {
                const sortBy = req.query.sort.split(",").join(" ");
                query = query.sort(sortBy);
            } else {
                query = query.sort("-createdAt");
            }

            // limiting the fields

            if (req.query.fields) {
                const fields = req.query.fields.split(",").join(" ");
                query = query.select(fields);
            } else {
                query = query.select("-__v");
            }

            // pagination

            const page = req.query.page;
            const limit = req.query.limit;
            const skip = (page - 1) * limit;
            query = query.skip(skip).limit(limit);
            if (req.query.page) {
                const productCount = await Product.countDocuments();
                if (skip >= productCount) throw new Error("This Page does not exists");
            }   
            const product = await query;
            res.json(product);
        } catch (error) {
            throw new Error(error);
        }
    }
)

// Update product
exports.updateProduct = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            if (req.body.title) {
                req.body.slug = slugify(req.body.title)
            }

            const updateProduct = await Product.findOneAndUpdate(id, req.body, {new: true})
            res.status(200).json(updateProduct)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }   
    }
)

// Delete product
exports.deleteProduct = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const deleteItem = await Product.findOneAndDelete(id)
            res.status(200).json(deleteItem)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Add to wish list
exports.addToWishList = asyncHandler(
    async (req, res) => {
        const { _id } = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyadded = user.wishlist.find((id) => id.toString() === prodId);
    if (alreadyadded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
    }
)

// Rating
exports.rating = asyncHandler(
    async (req, res) => {
        const { _id } = req.user
        const { star, prodId, comment } = req.body
        try{
            const product = await Product.findById(prodId)
            let alreadyRated = product.ratings.find((userId) => userId.postedBy.toString() === _id.toString())
            if (alreadyRated) {
                const updateRating = await Product.updateOne(
                    {
                        ratings: { $elemMatch: alreadyRated }
                    }, 
                    {
                        $set: {"ratings.$.star": star, "ratings.$.comment": comment },
                    },
                    {
                        new: true
                    }
                )
            } else {
                const ratedProduct = await Product.findByIdAndUpdate(prodId, {
                    $push: {
                        ratings: {
                            star: star,
                            comment: comment,
                            postedBy: _id
                        }
                    }
                }, { new: true })
            }
            const getallratings = await Product.findById(prodId)
            let totalRating = getallratings.ratings.length
            let ratingsum = getallratings.ratings
                .map((item) => item.star)
                .reduce((prev, curr) => prev + curr, 0)
            let actualRating = Math.round(ratingsum / totalRating)
            const finalProduct = await Product.findByIdAndUpdate(prodId, {
                totalratings: actualRating
            }, { new: true })
            res.status(200).json(finalProduct)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)

// Upload product Images
exports.uploadImages = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const uploader = (path) => cloudinaryUploads(path, 'images')
            const urls = []
            const files = req.files
            for (const file of files) {
                const { path } = file
                const newPath = await uploader(path)
                urls.push(newPath)
                fs.unlinkSync(path)
            }
            const findProduct = await Product.findById(id, {
                images: urls.map((file) => {
                    return file
                }, { new: true })
            })
            res.status(200).json(findProduct)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)
