const { getRestaurant } = require('../Controller/RestaurantController');

const router=require('express').Router();

router.get("/get",getRestaurant);


module.exports=router;