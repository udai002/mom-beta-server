const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const KYCSchema = new Schema({
    Delivaryboy_id:{
         type:mongoose.Schema.Types.ObjectId,
            ref:'User'
    },
    Adharnumber:{
        type:String,

    },
    AdharPhoto:{
        type:String,
    },
    Adharverify:{
        type:String,
    },
    DrivingLicenceNumber:{
        type:String,
    },
    DrivingLicencePhoto:{
        type:String,
    },
    DrivingLicenceVerify:{
        type:String,
    },
    RCNumber:{
        type:String,
    },
    RCPhoto:{
        type:String,
    },
    RCVerify:{
        type:String,
    },
    PANnumber:{
        type:String,
    },
    PANPhoto:{
        type:String,
    },
    PANVerify:{
        type:String,
    },
})
module.exports = mongoose.model('KYCdelboy',KYCSchema);