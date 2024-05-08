const mongoose=require("mongoose");

const RestaurantSchema=mongoose.Schema({
    name:String,
      
    
    image:String,
    menu:[{
        name:String,
        
        price:Number,
        
        image:String,
        
    }],
    rating:Number,
    cuisine:String
});

const Restaurant=mongoose.model("resturant",RestaurantSchema);
module.exports=Restaurant;


