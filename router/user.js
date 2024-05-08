const { getUser, Register, Login } = require('../Controller/userController');


const router=require('express').Router();


router.get("/",getUser)
router.post("/register",Register);
router.post("/login",Login)

module.exports=router;