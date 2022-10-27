const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    // student_id : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    // },
    contact : {
        type : String,
    },
    student_email : {
        type : String,
        unique: true
    },
    tertiary_name : {
        type : String,
    }
},{
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
