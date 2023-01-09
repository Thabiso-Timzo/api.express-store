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
    logout
} = require('../../controllers/user-controller/userController')
const { authMiddleWare, isAdmin } = require('../../middleware/authMiddleware')

router.post('/register', register)
router.post('/login', login)

router.get('/refresh', handleRefreshToken)
router.get('/logout', logout)
router.get('/all', getAllUsers)
router.get('/:id' ,authMiddleWare, getSingleUser)

router.delete('/:id', deleteSingleUser)

router.put('/update_user', authMiddleWare, updateUser)
router.put('/blocked_user/:id', authMiddleWare, isAdmin, blockUser)
router.put('/unblocked_user/:id', authMiddleWare, isAdmin, unblockUser)

module.exports = router