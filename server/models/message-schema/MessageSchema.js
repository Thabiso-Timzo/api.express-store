const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    chatId: {
        type: String,
    },
    senderId: {
        type: String,
    },
    text: {
        type: String
    }
},{ timestamps: true });

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;