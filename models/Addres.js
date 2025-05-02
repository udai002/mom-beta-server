const  mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    userid: {
        type: Number,
        // required: [ true, "please add the userid"],
    },

    state: {
        type: String,
        // required: [ true, "please add the  state"],
    },

    city: {
        type: String,
        // required: [ true, "please add the  city"],
    },

    street: {
        type: String,
        // required: [ true, "please add the  street"],
    },


    pincode: {
        type: Number,
        // required: [ true, "please add the  state"],
    },
    houseNo:{
        type:String
    },
    buildingName:{
        type:String

    },

    name:{
        type:String
    },
   contact:{
    type:String
   }


},
{
    timestamps: true,
}


);

module.exports = mongoose.model("Addres", addressSchema)