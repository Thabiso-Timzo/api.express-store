const Message = require('../../models/message-schema/MessageSchema');
const ErrorHandler = require('../../utils/ErrorHandler');
const catchAsyncErrors = require('../../middleware/catchAsyncErrors');

// Add messages
const addMessage = catchAsyncErrors(async (req, res, next) => {
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
const getMessage = catchAsyncErrors(async (req, res, next) => {
    const { chatId } = req.params;

    try {
        const result = await Message.find({chatId});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = {
    addMessage,
    getMessage
}