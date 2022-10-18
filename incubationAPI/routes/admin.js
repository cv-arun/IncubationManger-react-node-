const express=require('express')
const router=express.Router();
const adminControll=require('../controller/adminController');
const verify = require('../middleware/jwt')


router.post('/login',adminControll.login)
router.get('/applicationDetails',verify,adminControll.getApplication)

router.post('/getApplicationData',verify,adminControll.getApplicationData)
router.post('/updateProcess',verify,adminControll.updateProcess)
router.get('/slotBookinDetails',verify,adminControll.slotBookinDetails)
router.post('/bookSolt',verify,adminControll.bookSlot)
router.post('/getOneApplication',verify,adminControll.getOneApplication)
router.get('/getUsers',verify,adminControll.getUsers)
router.post('/editUser',verify,adminControll.editUsers)



module.exports=router