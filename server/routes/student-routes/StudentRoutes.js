const express = require('express');
const router =   express.Router();

const {
    postStudentInfo, getAllStudents, getSingleStudent,
    updateStudentInfo, deleteStudentInfo, checkIfStudent
} = require('../../controller/student-controller/studentController')
const {auth} = require('../../middleware/auth');
const authAdmin = require('../../middleware/authAdmin');

router.post('/info', postStudentInfo);
router.post('/check-student', checkIfStudent);

router.get('/retrive', auth, authAdmin, getAllStudents);
router.get('/retrieve/:id', auth, getSingleStudent);

router.put('/update/student/:id', auth, updateStudentInfo);

router.delete('/person/:id', auth, authAdmin, deleteStudentInfo);

module.exports = router;