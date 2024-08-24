// for login 
const express=require('express');
const router=express.Router();
const Post=require('../models/post');

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User=require('../models/User');
const jwtSecret=process.env.JWT_SECRET;
// admin  page

const authMiddleware=(req,res,next)=>{
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({ message:'unauthorised'});

    } 
    try{
        const decoded=jwt.verify(token,jwtSecret);
        req.userId=decoded.userId;
        next();
    }
    catch(error){
        res.status(401).json({message:'unauthorised'});
    }
}



router.get('/admin',async(req,res)=>{
 try{   

res.render('admin/index1',{
  layout: '../views/layouts/admin.ejs'  
});

}
catch(error){
    console.log(error);
}
}

);

// check login
router.post('/admin',async(req,res)=>{
   try{
    
    const {username,password}=req.body;
   const user=await User.findOne({username});
   if(!user){
    return res.status(401).json({ message:'invalid user'})
   }
   const isPasswordValid=await bcrypt.compare(password,user.password);
   if(!isPasswordValid){
    return res.status(401).json({message:'invalid password'})
   }
const token=jwt.sign({userId:user._id},jwtSecret);
res.cookie('token',token,{httpOnly:true});
}
catch(error){
console.log(error);
}
});



// admin register
router.post('/register',async(req,res)=>{
    try{
        const {username,password}=req.body;
 
        const hashedPassword = await bcrypt.hash(password, 10);

 try{
    const user= await User.create({username: username,password:hashedPassword})
res.status(201).json({message:'user created',user});

}
catch(error){
if(error.code==11000){
    
 res.status(409).json({message:'user already in use'})  
   
}
res.send('internal server error');
} 
    }       
        catch(error){
        console.log(error);
    }
});


router.get('/dashboard',async(req,res)=>{
    
        const locals=[ {
            title:'dashboard',
            description:'simple blog created with us'
        },
        {
            title:'dashboard',
            description:'simple blog created with us'
        },
        {
            title:'dashboard',
            description:'simple blog created with us'
        },
    ]


res.render('admin/dashboard',{layout:"../views/admin/dashboard.ejs"});
console.log(req.body);
    }

)



router.get('/add-post',async(req,res)=>{
    const locals={
    title:'add post',
    body:'jkfdsjdf'
    }
    res.render('admin/add-post',{locals});

})


router.post('/add-post',async(req,res)=>{
    try{
       console.log(req.body);
        try{
            const newPost= await new Post({
            title:{
                type:String,
                require:true
            },
            text:{
                type:String,
                require:true
            }
            });
  await Post.create(newPost);
await newPost.save();
res.render(newPost);
        }
        catch(error){
            res.redirect('/admin');
        }
    }
catch(error){
console.log(error);
}}
)

module.exports=router;

