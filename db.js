const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        mongoose.set('strictQuery',false);
        
    mongoose.connect('mongodb+srv://pant:tTEBIp7nEP7de3PE@atharv.09g0rli.mongodb.net/');
        console.log('connected')
    }
    catch(error){
        console.log(error);
    }
};
module.exports=connectDB;