const mongoose = require('mongoose');
const MedicineSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter medicine name"]
    },

    quantity: {
        type: Number,
        required: true,
        default: 0
    },

    price: {
        type: Number,
        required: true,
        default: 0
    },
    
    description: {
        type: String,
    },
    
    Expirydate: {
        type: Number,
        default: 0
    },

    imageUrl:{
        type: String,
        required: true
    },
    
});

const Medicine = mongoose.model("Medicine",MedicineSchema);

module.exports = Medicine;