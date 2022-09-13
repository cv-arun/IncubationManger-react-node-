const mongoose=require('mongoose');

const UserShema=new mongoose.Schema({

    fname:String,
    email:String,
    companyName:String,
    password:String

})

module.exports=mongoose.model('User',UserShema)