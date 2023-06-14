const mongoose = require('mongoose')

const colorSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
},{ timestamp: true })

const Color = mongoose.model("Color", colorSchema)
module.exports = Color