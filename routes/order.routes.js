const express = require('express');
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  assignOrder,
  updateOrderStatus,
} = require('../controllers/order.controllers');

router.post('/', createOrder); 
router.get('/', getAllOrders); 
router.get('/:id', getOrderById); 
router.post('/:id/assign', assignOrder); 
router.patch('/:id/status', updateOrderStatus); 

module.exports = router;
