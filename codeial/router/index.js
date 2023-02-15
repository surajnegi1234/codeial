const express=require('express');
const router=express.Router();
console.log('route loaded');
const homeController=require('../controller/home_controller')
router.get('/','/homeController.home');
module.export=router;