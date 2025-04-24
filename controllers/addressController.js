const Address = require('../models/Addres');

const createAddress = async(req, res)=> {
    try{
        const {userid, state,city,street,pincode} = req.body

        const address = new Address({
            userid,
            state,
            city,
            street,
            pincode
        })
        await address.save()
        res.status(201).json(address)
    }catch(error){
        console.log("there is an error:", error)
        res.status(500).json({message: 'Server error'})
    }
}

const getAddress = async(req, res)=> {
    try{
        const address = await Address.find()
        res.status(200).json(address)
}catch(error){
    console.log("there is an error:", error)
    res.status(500).json({message:'Server error'})
}
}
const updateAddress = async(req, res)=> {
    try{
        const {userid, state, city, street,pincode} = req.body

        const myAddress = await Address.findByIdAndUpdate(req.params.id,
        {userid,state, city, street, pincode}
    )
    if(!myAddress){
        return res.status(404).json({message:"address not found"})
    }
    res.status(200).json(myAddress)
    }
    catch(error){
        console.error('there is an error:', error)
        res.status(500).json({message:"Server error"})
    }
}

const deleteAddress = async(req, res)=> {
    try{
        const deleteAddress = await Address.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }catch(error){
        console.error('there is an error:', error )
        res.status(500).json({message:"Server error"})
    }
}
module.exports= {createAddress, getAddress,updateAddress,deleteAddress}