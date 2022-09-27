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

router.get('/admin/orders', isAuthenticatedUser, authorisedRoles(1), getAdminAllOrders);
router.get('/me', isAuthenticatedUser, getAllOrders);
router.get('/:id', isAuthenticatedUser, getSingleOrder);

router.put('/admin/order/:id', isAuthenticatedUser, authorisedRoles(1), updateAdminOrder);

router.delete('/admin/order/:id', isAuthenticatedUser, authorisedRoles(1), deleteOrder);


module.exports = router;