const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    phonenumber:{
type:Number,
required:true, },
    name:{
        type:String,
        required:true,


    },
    email:{
    
type:String,
required:true,
match: [/\S+@\S+\.\S+/, 'is invalid'],
index:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
    }
})

const User=mongoose.model('user',userSchema);
module.exports=User;