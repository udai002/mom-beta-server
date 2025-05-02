const Order = require("../models/order.models");
const Medicine = require("../models/medicine"); 

const createOrder = async (req, res) => {
  try {
    const {
      user_id,
      deliveryboy_id,
      address_id,
      prescription_id,
      ETA,
      medicines, 
    } = req.body;

    if (!medicines || medicines.length === 0) {
      return res.status(400).json({ msg: "Order must contain at least one medicine" });
    }

    let totalAmount = 0;
    const enrichedMedicines = [];

    for (const med of medicines) {
      const medicine = await Medicine.findById(med.medicine_id);

      if (!medicine) {
        return res.status(404).json({ msg: `Medicine not found: ${med.medicine_id}` });
      }

      const unitPrice = medicine.price;
      const subtotal = unitPrice * med.quantity;
      totalAmount += subtotal;

      enrichedMedicines.push({
        medicine_id: med.medicine_id,
        quantity: med.quantity,
        price: unitPrice,
      });
    }

    const order = new Order({
      user_id,
      deliveryboy_id,
      address_id,
      prescription_id,
      ETA,
      medicines: enrichedMedicines,
      total_amount: totalAmount,
    });

    await order.save();
    res.status(201).json(order);
  } catch (e) {
    console.error("Error creating order:", e);
    res.status(500).json({ msg: "Internal server error", error: e });
  }
};

const getOrder = async (req, res) => {
  try {
    const orderDetails = await Order.find()
      .populate('user_id')
      .populate('deliveryboy_id')
     
      .populate('prescription_id')
      .populate('medicines.medicine_id'); // populate medicine details

    res.status(200).json(orderDetails);
  } catch (e) {
    console.error("Error in getOrder:", e);
    res.status(500).json({ msg: "Internal server error" });
  }
};

  const getOrderById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Validate ObjectId
      
  
      const orderDetails = await Order.findById(id)
        .populate('user_id')
        .populate('deliveryboy_id')
         
        .populate('prescription_id')
        .populate({path:'medicines.medicine_id',
          select: 'name quantity price _id'
        }); // Populate nsted medicine info
  
      if (!orderDetails) {
        return res.status(404).json({ msg: "Order not found" });
      }
  
      res.status(200).json(orderDetails);
    } catch (e) {
      console.error("Error in getOrderById:", e);
      res.status(500).json({ msg: "Internal server error", error: e.message });
    }
};


module.exports = { createOrder, getOrder,getOrderById };
