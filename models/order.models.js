const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  deliveryboy_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DeliveryBoy'
  },
  address_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address'
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'on the way', 'delivered', 'cancelled'],
    default: 'pending'
  },
  prescription_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prescription'
  },
  ETA: {
    type: Number,
    default: 10
  },
  medicines: [
    {
      medicine_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medicine',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      },
      price: {
        type: Number, // price per unit at the time of ordering
        required: true
      }
    }
  ],
  total_amount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema);
