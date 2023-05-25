const cloudinary = require('cloudinary')

const { cloud_name, cloud_api_key, cloud_api_secret } = require('../config/env/index')

cloudinary.config({
    cloud_name: cloud_name,
    api_key: cloud_api_key,
    api_secret: cloud_api_secret
})

const cloudinaryUploads = async (fileToUpload) => {
    return new Promise((resolve) => {
        // cloudinary.v2.uploader.upload(fileToUpload, (result)
        cloudinary.uploader.upload(fileToUpload, (result) => {
            resolve(
                {
                    url: result.secure_url
                },
                {
                    resource_type: "auto"
                }
            )
        })
    })
}

module.exports = { cloudinaryUploads }