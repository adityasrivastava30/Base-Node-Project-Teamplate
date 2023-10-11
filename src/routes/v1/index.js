const express=require('express');

const router=express.Router();

const  {  Inforcontroller }=require('../../controllers');

router.get('/info', Inforcontroller.info);

module.exports=router;