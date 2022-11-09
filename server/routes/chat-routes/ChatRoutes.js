const express = require('express');
const router = express.Router(); 

const { 
    createChat, userChats, findChat 
} = require('../../controller/chat-controller/ChatController');
const {auth} = require('../../middleware/auth');

router.post('/', auth, createChat);

router.get('/:userId', userChats);
router.get('/find/:firstId/:secondId', auth, findChat);

module.exports = router;