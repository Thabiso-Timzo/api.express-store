const Chat = require('../../models/chat-schema/ChatSchema');

// Create a chat
exports.createChat = async (req, res) => {
    const newChat = new Chat({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
 
// Get user chats
exports.userChats = async (req, res, next) => {
    try {
        const chat = await Chat.find({
            members: {$in: [req.params.userId]}
        })
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Find a Chat
exports.findChat = async (req, res, next) => {
    try {
        const chat = await Chat.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]}
        })
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
}