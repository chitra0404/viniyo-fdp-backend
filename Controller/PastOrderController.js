const PastOrder=require('../model/OrderModel');

module.exports.getOrder=async(req,res)=>{
    try{
        const pastOrder=await PastOrder.find();
        res.status(200).json(pastOrder);
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

module.exports.addPastOrder=async(req,res)=>{
    try{
    const {orderId,restaurantname,dateoforder,amount}=req.body;

    const newOrder=new PastOrder(orderId,restaurantname,dateoforder,amount)
    await newOrder.save();
    res.status(201).json({ message: " order saved successfully!" });
    }
    catch(err){
        res.status(500).json({ error: "Internal server error" });

    }
    
}