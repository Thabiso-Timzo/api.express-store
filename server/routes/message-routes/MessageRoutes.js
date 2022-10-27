const express = require('express');
const router = express.Router();

const {  
    addMessage, getMessage 
} = require('../../controller/message-controller/MessageController');
const {auth} = require('../../middleware/auth');

router.post('/', auth, addMessage);

router.get('/:chatId', auth, getMessage);

module.exports = router;