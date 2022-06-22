const express = require('express');
const router = express.Router();

const { isAuthenticatedUser, authorisedRoles } = require('../../middleware/auth');
const { 
    createOrder, 
    getSingleOrder,
    getAllOrders,
    getAdminAllOrders,
    updateAdminOrder,
    deleteOrder
} = require('../../controller/order-controller/OrderController');

router.post('/new', isAuthenticatedUser, createOrder);

router.get('/admin/orders', isAuthenticatedUser, authorisedRoles('admin'), getAdminAllOrders);
router.get('/me', isAuthenticatedUser, getAllOrders);
router.get('/:id', isAuthenticatedUser, getSingleOrder);

router.put('/admin/order/:id', isAuthenticatedUser, authorisedRoles('admin'), updateAdminOrder);

router.delete('/admin/order/:id', isAuthenticatedUser, authorisedRoles('admin'), deleteOrder);


module.exports = router;