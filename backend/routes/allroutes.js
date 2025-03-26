const express = require('express');
const router = express.Router();
// const students = require('../models/models');
const {hii,createuser,getallusers, getuserbyid ,updateuser ,deleteUser}= require('../controllers/userControllers');

router.get('/hi',(req,res)=>{
    res.json({mssg:'Hi Archith'});
})
// router.get('/cont',(req,res)=>{
//     hii();
// })

router.get('/cont',hii);
//CRUD operations
router.post('/createuser',createuser); //C
router.get('/get',getallusers);//R
router.get('/get/:id',getuserbyid);
router.put('/update/:id',updateuser);//U
router.delete('/delete/:id',deleteUser);

module.exports=router;