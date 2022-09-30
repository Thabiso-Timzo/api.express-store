const express = require('express');
const router = express.Router();

const { 
    auth,
    createUser, 
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    userDetails,
    updatePassword,
    updateProfile,
    getAllUsers,
    getSingleUser,
    updateUserRole,
    deleteUser,
    checkIfStudent,
} = require('../../controller/user-controller/UserController');
const authUser  = require('../../middleware/auth');

router.post('/register', createUser);
router.post('/login', loginUser);
// router.post('/password/forgot', forgotPassword );
// router.post('/check', authorisedRoles, checkIfStudent);

router.get('/auth', authUser, auth);

router.get('/logout', authUser, logoutUser);
router.get('/me' , userDetails);
router.get('/admin/users' , getAllUsers);
router.get('/admin/user/:id', getSingleUser);

router.put('/password/reset/:token', resetPassword);
router.put('/me/update',  updatePassword);
router.put('/me/update/info',  updateProfile);
router.put('/admin/user/:id', updateUserRole);

router.delete('/admin/user/:id', deleteUser);

module.exports = router;