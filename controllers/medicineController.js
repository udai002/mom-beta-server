const Medicine = require('../models/medicine');
const fs = require('fs');
const path = require('path');


const medicineAdd = async (req, res) => {
    try {
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
        const { name, price, quantity, description, expirydate } = req.body;

        // if (!name || !price || !quantity || !description || !expirydate || !imageUrl) {
        //     return res.status(400).json({ message: "All fields including image are required" });
        // }

        const newMedicine = new Medicine({ name, price, quantity, description, expirydate, imageUrl });
        await newMedicine.save();

        res.status(201).json({ message: "Medicine added successfully", data: newMedicine });
    } catch (error) {
        res.status(500).json({ message: "Error adding medicine", error: error.message });
    }
};


const getAllMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.status(200).json(medicines);
    } catch (error) {
        res.status(500).json({ message: "Error fetching medicines", error: error.message });
    }
};


const getMedicineById = async (req, res) => {
    try {
        const medicine = await Medicine.findById(req.params.id);
        if (!medicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }
        res.status(200).json(medicine);
    } catch (error) {
        res.status(500).json({ message: "Error fetching medicine", error: error.message });
    }
};


const updateMedicine = async (req, res) => {
    try {
        const { name, price, quantity, description, expirydate } = req.body;
        const updateData = { name, price, quantity, description, expirydate };

        if (req.file) {
            updateData.imageUrl = `/uploads/${req.file.filename}`;
        }

        const updatedMedicine = await Medicine.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!updatedMedicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }

        res.status(200).json({ message: "Medicine updated successfully", data: updatedMedicine });
    } catch (error) {
        res.status(500).json({ message: "Error updating medicine", error: error.message });
    }
};
const deleteMedicine = async (req, res) => {
    try {
        const medicine = await Medicine.findByIdAndDelete(req.params.id);

        if (!medicine) {
            return res.status(404).json({ message: "Medicine not found" });
        }
        if (medicine.imageUrl) {
            const filePath = path.join(__dirname, '..', medicine.imageUrl);
            fs.unlink(filePath, err => {
                if (err) console.error("Error deleting image:", err.message);
            });
        }

        res.status(200).json({ message: "Medicine deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting medicine", error: error.message });
    }
};

module.exports = {medicineAdd,getAllMedicines,getMedicineById,updateMedicine,deleteMedicine};
