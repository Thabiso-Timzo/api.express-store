const Order = require('../../models/order-schema/OrderSchema');
const Product = require('../../models/Product-schema/ProductSchema');

// Create older
exports.createOrder = async (req, res) => {
    try {
        const {
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        } = req.body;
    
        const order = await Order.create({
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paidAt:Date.now(),
            user: req.user._id,
        });
    
        res.status(200).json({
            success: true,
            order
        })
    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
}

// Get a single order
exports.getSingleOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id).populate(
            "user",
            "name email"
        )
    
        if (!order) {
            return res.status(404).json({msg: 'Order items not found with this id.'})
        }
    
        res.status(200).json({
            success: true,
            order
        })
    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
}

// Get ALl orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({user: req.user._id});

        res.status(200).json({
            success: true,
            orders
        })   
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

// Get all orders --admin
exports.getAdminAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();

        let totalAmount = 0;

        orders.forEach(order => {
            totalAmount += order.totalPrice;
         });

        res.status(200).json({
            success: true,
            totalAmount,
            orders
        })   
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

// update Order Status ---Admin
exports.updateAdminOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
  
        if (!order) {
            return res.status(404).json({msg: 'Order not found with this Id'});
        }
  
        if (order.orderStatus === "Delivered") {
            return res.status(400).json({msg: 'You have already delivered this order'});
        }
  
        if (req.body.status === "Shipped") {
            order.orderItems.forEach(async (o) => {
                await updateStock(o.product, o.quantity);
            });
        }
        order.orderStatus = req.body.status;
  
        if (req.body.status === "Delivered") {
            order.deliveredAt = Date.now();
        }
  
        await order.save({ validateBeforeSave: false });
        res.status(200).json({
            success: true,
        });
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }   
}
  
async function updateStock(id, quantity) {
      
    const product = await Product.findById(id);
  
    product.Stock -= quantity;
  
    await product.save({ validateBeforeSave: false });
}

// delete Order ---Admin
exports.deleteOrder = async (req,res,next) =>{
    try {
        const order = await Order.findById(req.params.id);
    
        if(!order){
            return res.status(404).json({msg: 'Order not found with this Id'});
        }

        await order.remove();

        res.status(200).json({
            success: true,
        });
    } catch(err) {
        return res.status(500).json({msg: err.message});
    }
}