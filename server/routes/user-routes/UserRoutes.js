const express = require('express');
const router = express.Router();

const { 
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
    getMe
} = require('../../controller/user-controller/UserController');
const { isAuthenticatedUser, authorisedRoles } = require('../../middleware/auth');

router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/password/forgot', forgotPassword );
router.post('/check', authorisedRoles, checkIfStudent)

router.get('/me',isAuthenticatedUser, userDetails);
router.get('/admin/users', isAuthenticatedUser, authorisedRoles(1), getAllUsers);
router.get('/admin/users/:id', isAuthenticatedUser, authorisedRoles(1), getSingleUser);

router.put('/password/reset/:token', resetPassword);
router.put('/me/update', isAuthenticatedUser, updatePassword);
router.put('/me/update/info', isAuthenticatedUser, updateProfile);
router.put('/admin/users/:id', isAuthenticatedUser, authorisedRoles(1), updateUserRole);

router.delete('/admin/users/:id', isAuthenticatedUser, authorisedRoles(1), deleteUser);

module.exports = router;