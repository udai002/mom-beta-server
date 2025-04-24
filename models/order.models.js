const mongoose=require('mongoose')


const orderSchema= new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    deliveryboy_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DeliveryBoy'
    },
    address_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address'
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed','on the way', 'delivered', 'cancelled'],
        default: 'pending'
      },
    prescription_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Prescription'
    },
    ETA:{
      type:Number,
      default:10
    }


})
module.exports = mongoose.model("Order",orderSchema);
