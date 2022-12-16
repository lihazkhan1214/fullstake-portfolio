const mongoose=require("mongoose");
const validator=require("validator");
const userschema=mongoose.Schema({

name:{
    type:String,
    required:true,
    minLength:3
},
email:{
    type:String,
    required:true,
   validate(value){
    if(!validator.isEmail(value)){
        throw new Error("invalide")
    }
   }
},
phone:{
    type:Number,
    required:true,
    min:10
},


msg:{
    type:String,
    required:true,
    minLength:3
},
date:{
    type:Date,
    default:Date.now
}

});

const User=mongoose.model("users",userschema);
module.exports=User;