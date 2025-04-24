const Order = require("../models/order.models")

const createOrder = async(req, res) =>{
   
try{
    const orderDetails = new Order(req.body)
    await orderDetails.save()
    res.status(201).json(orderDetails)

}catch(e){
res.status(500).json({msg:"Internal server error",e})
}
}


const getOrder = async (req, res) => {
    try {
        const orderDetails = await Order.find()
        .populate('user_id')
        .populate('deliveryboy_id')
        .populate('address_id')
        .populate('prescription_id')
        .lean();
      
      res.status(200).json(orderDetails);
    } catch (e) {
      console.error("Error in getOrder:", e);
      res.status(500).json({ msg: "Internal server error" });
    }
  };
  


module.exports={getOrder, createOrder}