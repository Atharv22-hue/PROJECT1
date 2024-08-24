 // just like post in sign in area
 
 const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const UserSchema=new Schema({
username:{
    type:String,
    required:true,
    unique:true /// for uniquenesss
},
    password:{
        type:String,
        required:true,
    
    }
})
module.exports=mongoose.model('User',UserSchema);