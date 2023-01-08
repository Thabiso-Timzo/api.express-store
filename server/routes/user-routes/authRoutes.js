const express = require('express')
const router = express.Router()

const { 
    register,
    login,
    getAllUsers,
    getSingleUser,
    deleteSingleUser,
    updateUser
} = require('../../controllers/user-controller/userController')

router.post('/register', register)
router.post('/login', login)

router.get('/all', getAllUsers)
router.get('/:id' , getSingleUser)

router.delete('/:id', deleteSingleUser)

router.put('/:id', updateUser)

module.exports = router