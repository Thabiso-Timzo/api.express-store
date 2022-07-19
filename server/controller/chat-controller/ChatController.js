const Chat = require('../../models/chat-schema/ChatSchema');
const ErrorHandler = require('../../utils/ErrorHandler');
const catchAsyncErrors = require('../../middleware/catchAsyncErrors');

// Create a chat
const createChat = catchAsyncErrors(async (req, res, next) => {
    const newChat = new Chat({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
})
 
// Get user chats
const userChats = catchAsyncErrors(async (req, res, next) => {
    try {
        const chat = await Chat.find({
            members: {$in: [req.params.userId]}
        })
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Find a Chat
const findChat = catchAsyncErrors(async (req, res, next) => {
    try {
        const chat = await Chat.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]}
        })
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = {
    createChat,
    userChats,
    findChat
}