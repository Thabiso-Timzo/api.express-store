const Message = require('../../models/message-schema/MessageSchema');

// Add messages
exports.addMessage = async (req, res, next) => {
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
}


// Get Messages
exports.getMessage = async (req, res, next) => {
    const { chatId } = req.params;

    try {
        const result = await Message.find({chatId});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}