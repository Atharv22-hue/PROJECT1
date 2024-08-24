const express=require('express');

const Post=require('../models/post');
const router=express.Router();
// HOME AND GET
router.get('/',(req,res)=>{
    const locals=[{
        title:"node blog",
        description:"simple blog created by me"
    },
    {
        title:"building blog",
    body:"this is body text"
    },
    {
        title:"1 para",
    body:"this is  elite"
    },
    {
        title:"2 para",
    body:"this is  elite"
    },
    {
        title:"3 para",
    body:"this is  elite"
    },
];

console.log(locals);  
  res.render('index',{data:locals});
   }
);


router.get('/about',(req,res)=>{
    res.render('about');
});
  


// get the post INSIDE THE LINK IN THE HOME PAGE
router.get('/post/:id',async(req,res)=>{
try{
    let slug=req.params.id;

    const locals={
        title:'node ks',
        description:'foakf'
    }
   
    res.render('post',{locals});

}
catch(error){
    console.log(error);
}
});


// search the hashtags in ssearch bar

router.post('/search',async(req,res)=>{

    try{
        const locals={
            title:"search",
            description:"simple blog"
        }
  let searchTerm=req.body.searchTerm;
  console.log(searchTerm);
  res.send(searchTerm);
    }
    catch(error){
  console.log(error);
    }
});
module.exports=router;