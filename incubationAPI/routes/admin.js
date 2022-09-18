const express=require('express')
const router=express.Router();
const adminControll=require('../controller/adminController')


router.post('/login',adminControll.login)
router.get('/applicationDetails',adminControll.getApplication)
router.post('/getApplicationData',adminControll.getApplicationData)
router.post('/updateProcess',adminControll.updateProcess)



module.exports=router