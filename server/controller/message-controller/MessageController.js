const asyncHandler = require('express-async-handler');
const Message = require('../../models/message-schema/MessageSchema');

// Add messages
exports.addMessage = asyncHandler(
    async (req, res) => {
    const { chatId, senderId, text } = req.body;
    const message = new Message({
        chatId,
        senderId,
        text
    });

    try {
        const result = await message.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
})


// Get Messages
exports.getMessage = asyncHandler(
    async (req, res, next) => {
    const { chatId } = req.params;

    try {
        const result = await Message.find({chatId});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
})