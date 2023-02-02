const asyncHandler = require('express-async-handler')
const fs = require('fs')

const Blog = require('../../models/blog-model/blogModel')
const User = require('../../models/user-model/userModel')
const { cloudinaryUploads } = require('../../utils/cloudinary')

// Create a blog
exports.createBlog = asyncHandler(
    async (req, res) => {
        try {
            const newBlog = await Blog.create(req.body)
            res.status(200).json({
                status: "success",
                newBlog
            })
        } catch (error) {
            res.json(500).json({ message: error.message })
        }
    }
)


// Update blog
exports.updateBlog = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const updateblog = await Blog.findByIdAndUpdate(id, req.body, { new: true })
            res.status(200).json(updateblog)
        } catch (error) {
            res.json(500).json({ message: error.message })           
        }
    }
)

// Fetch a blog
exports.getBlog = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const getblog = await Blog.findById(id).populate("likes").populate("dislikes")
            const updateViews = await Blog.findByIdAndUpdate(id, {
                $inc:  { numViews: 1 }
            }, { new: true })
            res.status(200).json(getblog)
        } catch (error) {
            res.json(500).json({ message: error.message })           
        }
    }
)

// Fetch all blocks
exports.getAllBlogs = asyncHandler(
    async (req, res) => {
        try {
            const getBlogs = await Blog.find()
            res.status(200).json(getBlogs)
        } catch (error) {
            res.json(500).json({ message: error.message })
        }
    }
)

// Delete blog
exports.deleteBlog = asyncHandler(
    async (req, res) => {
        const { id } = req.params
        try {
            const deleteblog = await Blog.findByIdAndDelete(id)
            res.status(200).json(deleteblog)
        } catch (error) {
            res.json(500).json({ message: error.message })           
        }
    }
)

// Like a blog
exports.likeBlog = asyncHandler(
    async (req, res) => {
        const { blogId } = req.body
        console.log(blogId)
        // blog to be liked
        const blog = await Blog.findById(blogId)
        // the user
        const loginUserId = req?.user?._id
        // if the user liked the blog
        const isLiked = blog?.isLiked
        // if the user disliked the blog
        const alreadyDisliked = blog?.dislikes.find(
            (userId => userId?.toString() === loginUserId?.toString())
        )
        if (alreadyDisliked) {
            const blog = await Blog.findByIdAndUpdate(blogId, {
                $pull: { dislikes: loginUserId },
                isDisliked: false
            }, { new: true })
            res.json(blog)
        }
        if (isLiked) {
            const blog = await Blog.findByIdAndUpdate(blogId, {
                $pull: { likes: loginUserId },
                isliked: false
            }, { new: true })
            res.json(blog)
        } else {
            const blog = await Blog.findByIdAndUpdate(blogId, {
                $push: { likes: loginUserId },
                isliked: true
            }, { new: true })
            res.json(blog)
        }
    }
)

// DisLlike a blog
exports.dislikeBlog = asyncHandler(
    async (req, res) => {
        const { blogId } = req.body
        console.log(blogId)
        // blog to be liked
        const blog = await Blog.findById(blogId)
        // the user
        const loginUserId = req?.user?._id
        // if the user liked the blog
        const isDisLiked = blog?.isDisliked
        // if the user disliked the blog
        const alreadyLiked = blog?.likes.find(
            (userId => userId?.toString() === loginUserId?.toString())
        )
        if (alreadyLiked) {
            const blog = await Blog.findByIdAndUpdate(blogId, {
                $pull: { likes: loginUserId },
                isLiked: false
            }, { new: true })
            res.json(blog)
        }
        if (isDisLiked) {
            const blog = await Blog.findByIdAndUpdate(blogId, {
                $pull: { dislikes: loginUserId },
                isDisliked: false
            }, { new: true })
            res.json(blog)
        } else {
            const blog = await Blog.findByIdAndUpdate(blogId, {
                $push: { dislikes: loginUserId },
                isDisliked: true
            }, { new: true })
            res.json(blog)
        }
    }
)

// Upload blog Images
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
            const findBlog = await Blog.findById(id, {
                images: urls.map((file) => {
                    return file
                }, { new: true })
            })
            res.status(200).json(findBlog)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
)