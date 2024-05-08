const Restaurant=require("../model/ResturantModel");
const {data}=require("../Data/data")

module.exports.getRestaurant=async(req,res)=>{
try{
    const resturant=await Restaurant.find();
    res.json(resturant);
    console.log(resturant);
}
catch(err){
    res.status(500).json({ error: err.message });

}
}
const addRestaurant=async()=>{
    try{
         
        await Restaurant.deleteMany();
       await Restaurant.insertMany(data );
        //.log("database added successfully",data)
       
    }
  
        catch (error) {
            console.error("Error seeding the database:", error.message);
        }
    }

    addRestaurant();