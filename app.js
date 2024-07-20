const express=require('express');
const expressLayout=require('express-ejs-layouts');

// cookie parser




const mongoose =require( 'mongoose');

const app=express();


app.use(express.static('public'));

app.use(expressLayout);


// for login 
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// for register the things
const cookieparser=require('cookie-parser');
const mongo=require('connect-mongo');
const session=require('express-session');



app.use(cookieparser());
app.set('layout','./layouts/main.ejs');


app.set('view engine','ejs');

// to pass cookie to store  data 

// access to main ans  admin

app.use('/',require('./server/routes/main.js'));
app.use('/',require('./server/routes/admin.js'));


const connectDB=require('./server/config/db');



// to pass data in search bar
app.use(express.urlencoded({extended: true}));
app.use(express.json());


const mongoURI = 'mongodb+srv://pant:tTEBIp7nEP7de3PE@atharv.09g0rli.mongodb.net/'; // Replace with your MongoDB URI

app.use(cookieparser);
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:false,
    store:mongo.create({
        mongoUrl:mongoURI,
        collectionName:'sessions'
    })
}));



// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));

// connect to db
connectDB();

app.listen(5000,async()=>{
    console.log("running");
   

});