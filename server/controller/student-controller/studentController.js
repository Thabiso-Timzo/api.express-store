const Student = require('../../models/student-schema/StudentSchema');
const asyncHandler = require('express-async-handler');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

exports.postStudentInfo = asyncHandler(
    async (req, res) => {
    const { contact, tertiaryEmail, tertiaryName} = req.body;
    let existingStudent;
     
    try {
        existingStudent = await Student.findOne({ tertiaryEmail });
        if (existingStudent) {
            return res.status(400).json({msg: 'Email already exists! Please use a different email.'});
        }

        if (!validateEmail(tertiaryEmail)) {
            return res.status(400).json({msg: 'Please enter a valid email address.'});
        }

        const student = new Student({
            contact,
            tertiaryEmail,
            tertiaryName,
        })

        await student.save();

        return res.status(201).json({message: 'Registered successfully.'})
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
})

// exports.getAllStudents = async (res, req) => {
//     try {

//     } catch(err) {
//         return res.status(500).json({msg: err.message});
//     }
// } 

// exports.getSingleStudent = async (res, req) => {
//     try {

//     } catch(err) {
//         return res.status(500).json({msg: err.message});
//     }
// }

// exports.updateStudentInfo = async (res, req) => {
//     try {

//     } catch(err) {
//         return res.status(500).json({msg: err.message});
//     }
// }

// exports.deleteStudentInfo = async (res, req) => {
//     try {

//     } catch(err) {
//         return res.status(500).json({msg: err.message});
//     }
// }


// exports.checkIfStudent = (req, res) => {
//     const {student_id} = req.body;
//     Student.find({student_id: student_id}, (e, adv) => {
//         if (e) {
//             return res.status(200).json({
//                 err: true,
//                 msg: e,
//                 isStudent: false
//             })
//         } else {
//             if (adv.length > 0) {
//                 return res.status(200).json({
//                     err: false,
//                     msg: 'User Is A Student',
//                     isStudent: true
//                 })
//             } else {
//                 return res.status(200).json({
//                     err: true,
//                     msg: 'User Not A Student',
//                     isStudent: false
//                 })
//             }
//         }
//     })
// }