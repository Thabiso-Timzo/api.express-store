const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    country: {
        type: String,
    },
    tertiary_name: {
        type: String,
    }
}, {
    timestamps: true
})

const Schools = mongoose.model('School', schoolSchema);
module.exports = Schools;