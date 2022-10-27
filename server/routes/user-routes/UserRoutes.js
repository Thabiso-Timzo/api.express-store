const express = require('express');
const router = express.Router();

const {
    login, 
    register,
    logout,
    getUserInfor,
    getUsersAllInfor,
    updateUser,
    updateUsersRole,
    deleteUser
} = require('../../controller/user-controller/UserController');
const {auth, refreshToken} = require('../../middleware/auth');
const authAdmin = require('../../middleware/authAdmin');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', auth, logout);

router.get('/refresh', auth, refreshToken, getUserInfor);
router.get('/infor', auth, getUserInfor);
router.get('/all_infor', auth, authAdmin, getUsersAllInfor);

router.patch('/update', auth, updateUser);
router.patch('/update_role/:id', auth, authAdmin, updateUsersRole);

router.delete('/delete/:id', auth, authAdmin, deleteUser);

module.exports = router;