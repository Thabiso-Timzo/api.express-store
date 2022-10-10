const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const authAdmin = require('../../middleware/authAdmin');
const { 
    createOrder, getSingleOrder, getAllOrders, getAdminAllOrders,
    updateAdminOrder, deleteOrder
} = require('../../controller/order-controller/OrderController');

router.post('/new', auth, createOrder);

router.get('/admin/orders', auth, authAdmin, getAdminAllOrders);
router.get('/me', auth, getAllOrders);
router.get('/:id', auth, getSingleOrder);

router.put('/admin/order/:id', auth, authAdmin, updateAdminOrder);

router.delete('/admin/order/:id', auth, authAdmin, deleteOrder);

module.exports = router;