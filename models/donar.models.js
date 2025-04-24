
const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const donarSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    name:{
        type: String,
        required:true
    },
    phone: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/ 
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    country:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    district:{
        type: String,
        required:true
    },
    bloodGroup:{
        type: String,
        required:true
    },
    availability: {
        type: String,
        required:true
    },
    
    dob:{
        type: Date,
        required: true
    },
    /*gender:{
        type: String,
        required: true
    },
    pincode:{
        type: Number,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    address:{
        type: String,
        required: true
    },*/

});

module.exports=mongoose.model("Donar",donarSchema);
