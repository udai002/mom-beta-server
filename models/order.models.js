const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  deliveryboy_id: { type: mongoose.Schema.Types.ObjectId, ref: 'DeliveryBoy', default: null },
  address_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
  status: {
    type: String,
    enum: ['confirmed', 'on the way', 'delivered', 'cancelled'],
    default: 'confirmed',
  },
  ETA: { type: Number, default: 10 },
  medicines: [{
    medicine_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  }],
  total_amount: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
