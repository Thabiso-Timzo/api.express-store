const Student = require('../../models/student-schema/StudentSchema');

exports.postStudentInfo = async (res, req) => {
    try {

    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.getAllStudents = async (res, req) => {
    try {

    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
} 

exports.getSingleStudent = async (res, req) => {
    try {

    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.updateStudentInfo = async (res, req) => {
    try {

    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
}

exports.deleteStudentInfo = async (res, req) => {
    try {

    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
}


exports.checkIfStudent = (req, res) => {
    const {student_id} = req.body;
    Student.find({student_id: student_id}, (e, adv) => {
        if (e) {
            return res.status(200).json({
                err: true,
                msg: e,
                isStudent: false
            })
        } else {
            if (adv.length > 0) {
                return res.status(200).json({
                    err: false,
                    msg: 'User Is A Student',
                    isStudent: true
                })
            } else {
                return res.status(200).json({
                    err: true,
                    msg: 'User Not A Student',
                    isStudent: false
                })
            }
        }
    })
}