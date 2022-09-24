const cloudinary = require('cloudinary');
const fs = require('fs');

const { 
    cloud_name, 
    cloud_api_key, 
    cloud_api_secret_key 
} = require('../../config/index');

cloudinary.config({
    cloud_name: cloud_name,
    api_key: cloud_api_key,
    api_secret: cloud_api_secret_key
})

const uploadAvatar = (req, res) => {
    try {
        const file = req.files.file;
        cloudinary.v2.uploader.upload(file.tempFilePath, {
            folder: 'avatar', width: 150, height: 150, crop: "fill"
        }, async (err, result) => {
            if (err) throw err;
            
            removeTmp(file.tempFilePath)
    
            res.json({url: result.secure_url})
        })


    } catch(err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = {
    uploadAvatar
}