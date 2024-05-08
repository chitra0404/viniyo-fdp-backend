const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bodyparser=require("body-parser");
const route=require("./router/user")
const restrouter=require("./router/restaurant")
const order=require("./router/order")
const pay=require("./router/payment");
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());
app.use("/user",route);
app.use("/rest",restrouter);
app.use("/order",order);
app.use("/payment",pay)





 

 




const url=process.env.URL;

mongoose.connect(url)
.then(()=>console.log("connected to Mongodb"))
.catch(err=>console.log("error occurred"));

const port=3000;
app.listen(port,()=>console.log("listening to the port"));



