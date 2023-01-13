const express = require('express')
const router = express.Router()

const { 
    register,
    login,
    getAllUsers,
    getSingleUser,
    deleteSingleUser,
    updateUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword
} = require('../../controllers/user-controller/userController')
const { authMiddleWare, isAdmin } = require('../../middleware/authMiddleware')

router.post('/register', register)
router.post('/login', login)
router.post('/forgot-password-token', forgotPasswordToken)


router.get('/refresh', handleRefreshToken)
router.get('/logout', logout)
router.get('/all', getAllUsers)
router.get('/:id' ,authMiddleWare, getSingleUser)
router.put('/reset-password/:token', resetPassword)

router.delete('/:id', deleteSingleUser)

router.put('/update', authMiddleWare,updatePassword)
router.put('/update_user', authMiddleWare, updateUser)
router.put('/blocked_user/:id', authMiddleWare, isAdmin, blockUser)
router.put('/unblocked_user/:id', authMiddleWare, isAdmin, unblockUser)

module.exports = router

// 4:15:00