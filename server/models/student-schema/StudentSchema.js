const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    contact: {
        type : String,
    },
    tertiaryEmail: {
        type : String,
        unique: true
    },
    tertiaryName: {
        type : String,
    }
},{
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
