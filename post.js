const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const PostSchema=new Schema({
    username:{
type:String,
required:true,
 unique:true
    },
    password:{
type:String,
required:false
    },

})
module.exports=mongoose.model('Post',PostSchema);