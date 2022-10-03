const express = require('express');
const router = express.Router();

const {
    register,
    activateEmail,
    login,
    getAccessToken,
    forgotPassword,
    resetPassword,
    getUserInfo,
    getUsersAllInfo,
    logout,
    updateUser,
    updateUsersRole,
    deleteUser
} = require('../../controller/user-controller/UserController');
const auth = require('../../middleware/auth');
const authAdmin = require('../../middleware/authAdmin');

router.post('/register', register);
router.post('/activation', activateEmail);
router.post('/login', login);
router.post('/refresh_token', getAccessToken);
router.post('/forgot', forgotPassword);
router.post('/reset', auth, resetPassword);

router.get('/info', auth, getUserInfo);
router.get('/users', auth, authAdmin, getUsersAllInfo);
router.get('/logout', logout);

router.patch('/update', auth, updateUser);
router.patch('/update_role/:id', auth, authAdmin, updateUsersRole);

router.delete('/delete/:id', auth, authAdmin, deleteUser);

module.exports = router;