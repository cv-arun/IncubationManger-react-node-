const mongoose=require('mongoose');

const AdminShema=new mongoose.Schema({

    email:String,
    password:String

})

module.exports=mongoose.model('Admin',AdminShema)