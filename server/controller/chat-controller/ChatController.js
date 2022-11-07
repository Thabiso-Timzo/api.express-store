const asyncHandler = require('express-async-handler');
const Chat = require('../../models/chat-schema/ChatSchema');

// Create a chat
exports.createChat = asyncHandler(
    async (req, res) => {
    const newChat = new Chat({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
 
// Get user chats
exports.userChats = asyncHandler(
    async (req, res) => {
    try {
        const chat = await Chat.find({
            members: {$in: [req.params.userId]}
        })
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// Find a Chat
exports.findChat = asyncHandler(
    async (req, res) => {
    try {
        const chat = await Chat.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]}
        })
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})