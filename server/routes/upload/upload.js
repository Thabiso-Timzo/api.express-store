const express = require('express');
const router = express.Router();

const uploadImage = require('../../middleware/uploadImage');
const uploadCtrl = require('../../controller/upload-controller/uploadController')
const auth = require('../../middleware/auth');

router.post('/upload_avatar', auth, uploadImage, uploadCtrl.uploadAvatar);

module.exports = router;