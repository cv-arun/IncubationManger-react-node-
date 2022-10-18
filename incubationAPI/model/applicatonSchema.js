const mongoose = require('mongoose');

const ApplicationShema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    Name:String,
    Address:String,
    City:String,
    State:String,
    Email:String,
    Phone:String,
    Company:String,
    companyDetails:String,
    field10:String,
    field11:String,
    field12:String,
    field13:String,
    field14:String,
    field15:String,
    field16:String,
    field17:String,
    field18:String,
    slot:String,
    approve:{
        type:String,
        default:'Pending'
    },
    opened:{
        type:Boolean,
        default:false
    },
    slot:String
},{
    timestamps:true
})

module.exports = mongoose.model('Application', ApplicationShema)