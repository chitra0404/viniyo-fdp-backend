const mongoose=require("mongoose");

const orderSchema=mongoose.Schema({
    orderId:{
        type:String,
        required:true
    },
    restaurantname:{
        type:String,
        required:true

    },
    dateoforder:{
    
        type:Date,
        required:true,
    },
    amount:{
        type:Number,
        required:true
    }
})
const PastOrder=mongoose.model("pastorder",orderSchema);
module.exports=PastOrder;