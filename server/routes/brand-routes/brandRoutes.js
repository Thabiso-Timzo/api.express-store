const express = require('express')
const router = express.Router()

const { 
    createBrand, 
    updateBrand, 
    deleteBrand, 
    getBrand,
    getAllBrand
} = require('../../controllers/brand-controller/brandController')
const { isAdmin, authMiddleWare  } = require('../../middleware/authMiddleware')

router.post('/create', isAdmin, authMiddleWare, createBrand)

router.get('/all', getAllBrand)
router.get('/:id', getBrand)

router.delete('/:id', isAdmin, authMiddleWare, deleteBrand)

router.put('/:id', isAdmin, authMiddleWare, updateBrand)

module.exports = router