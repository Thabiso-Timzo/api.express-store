const express = require('express');
const router = express.Router();

const uploadImage = require('../../middleware/uploadImage');
const { 
    uploadAvatar 
} = require('../../controller/upload-controller/uploadController')
const { isAuthenticatedUser } = require('../../middleware/auth');
router.post('/upload_avatar', uploadImage, isAuthenticatedUser, uploadAvatar);

module.exports = router;