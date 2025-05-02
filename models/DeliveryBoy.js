const mongoose = require('mongoose'); 

const deliveryBoySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
  },
  vehicleType: {
    type: String,

  },
  vehicleNumber: {
    type: String,
    // required: true,
  },
  available: {
    type: String,
    default: true,
  },
  status: {
    type: String,
    enum: ['Online', 'Offline', 'Busy'],
    default: 'Online',
  },
  location: { 
    type: String,
  
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('DeliveryBoy', deliveryBoySchema);
