const express=require("express")
const router = express.Router();
const {handleOrder,handleFailedPayment,handlePaymentVerify,handleGetOrders}=require("../Controller/paymentController")

router.post('/get-orders',handleGetOrders)  
router.post('/orders',handleOrder ) ; 
router.post('/verify',  handlePaymentVerify )  
router.post('/failed',  handleFailedPayment )

module.exports=router;