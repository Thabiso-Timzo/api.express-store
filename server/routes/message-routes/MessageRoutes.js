const express = require('express');
const router = express.Router();

const {  
    addMessage, 
    getMessage 
} = require('../../controller/message-controller/MessageController');
const { isAuthenticatedUser } = require('../../middleware/auth');

router.post('/', isAuthenticatedUser, addMessage);

router.get('/:chatId', isAuthenticatedUser, getMessage);

module.exports = router;