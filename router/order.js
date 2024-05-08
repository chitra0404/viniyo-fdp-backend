const { getOrder, addPastOrder } = require('../Controller/PastOrderController');

const router=require('express').Router();

router.get("/getorder",getOrder);
router.post("/past", addPastOrder);

module.exports=router;