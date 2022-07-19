const express = require('express');
const router = express.Router(); 

const { 
    createChat,
    userChats,
    findChat 
} = require('../../controller/chat-controller/ChatController');
const { isAuthenticatedUser } = require('../../middleware/auth');

router.post('/', isAuthenticatedUser, createChat);

router.get('/:userId', isAuthenticatedUser, userChats);
router.get('/find/:firstId/:secondId', isAuthenticatedUser, findChat);

module.exports = router;