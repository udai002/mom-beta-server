const Donar = require('../models/donar.models');
const jwt = require("jsonwebtoken")

const createDonar = async(req,res)=>{
    try{
        const {userId, name,bloodGroup, dob, phone, email, country, state, district,city, pincode, availability}=req.body;
        const donar = new Donar({
            userId,
            name,
            bloodGroup,
            dob,
            phone,
            email,
            country,
            state,
            district,
            city,
            pincode,
            availability
        })
        await donar.save();
        res.status(201).json(donar);
    }
    catch(error)
    {
        console.log("There is an error: ",error);
        res.status(500).json({message:'Server Error'})
    }
}

const editDonar = async (req, res) => {
    try {
        const { userId,name,
            bloodGroup,
            dob,
            phone,
            email,
            country,
            state,
            district,
            city,
            pincode,
            availability } = req.body;

        const updatedDonar = await Donar.findOneAndUpdate(
            { userId },
            {
                name,
            bloodGroup,
            dob,
            phone,
            email,
            country,
            state,
            district,
            city,
            pincode,
            availability
            },
            { new: true } 
        );

        if (!updatedDonar) {
            return res.status(404).json({ message: "Donar not found" });
        }

        res.status(200).json(updatedDonar);
    } catch (error) {
        console.error("There is an error:", error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getDonar= async(req, res) => {
    try{
        const donar = await Donar.find().populate("userId")
        res.status(200).json(donar)
    }catch(error){
        console.error("There is an error:", error)
        res.status(500).json({message: "server error"})
    }
}

const deleteDonar = async (req, res) => {
    const id = req.params.id;
    console.log("Deleting Donar with ID:", id);
    try {
        const deletedDonar = await Donar.deleteOne({ _id: id });
        if (deletedDonar.deletedCount === 0) {
            return res.status(404).json({ msg: "Donar not found" });
        }
        res.status(200).json({ data: deletedDonar, msg: "Donar successfully deleted", status: true });
    } catch (e) {
        console.error("Delete error:", e);
        res.status(500).json({ msg: "Internal server error", error: e });
    }
};


module.exports = {createDonar, editDonar, getDonar, deleteDonar};