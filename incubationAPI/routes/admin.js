const express=require('express')
const router=express.Router();
const adminControll=require('../controller/adminController')


router.post('/login',adminControll.login)
router.get('/applicationDetails',adminControll.getApplication)



module.exports=router