const mongoose = require('mongoose');

const deliveryBoySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
  
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true
  },
  isAvailable: {
    type: String,
    enum: ['yes', 'no'],
    default: 'yes'
  }
});

module.exports = mongoose.model('DeliveryBoy', deliveryBoySchema);