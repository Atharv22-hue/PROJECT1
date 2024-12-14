import React ,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import Hero from './components/hero.js';
//import Popular from './components/popular.js';
//import Offer from './components/offer.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './comp/Home.js'
import Men from './comp/Men.js';
import Women from './comp/Women.js';

import 'bootstrap/dist/css/bootstrap.min.css';
//import { Collection } from 'mongoose';
//import Collection from './components/collection.js';
//import NewsLetter from './components/newsLetter.js';
//import collection from 'react-bootstrap/esm/AccordionContext.js';
//import Footer from './components/Footer.js';
//import Mmen from './Men.js';
import Kids from './comp/Kids.js';
import SignIn from './components/signup.js';
import Login from './components/Login';
import Product1 from './components/product1.js';
import Product2 from './components/product2.js';
import Product3 from './components/product3.js';
import Product4 from './components/product4.js';
import Cart1 from './components/cart1.js';
//import { isCompositeComponent } from 'react-dom/test-utils';
function App() {
  const [cart, setCart] = useState([]);

  // Define the addToCart function here
    // Function to remove items from the cart
    const removeFromCart = (productId) => {
      setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };
  
    // Function to update quantity of cart items
    const updateQuantity = (productId, change) => {
      setCart((prevCart) => prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      ));
    };
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    } 
  
  return (
    <main>
    <Router> 
    <Navbar/>
  
   
    <Routes>
      <Route path='/' element={<Home/>} />
          <Route path="/Men" element={<Men addToCart={addToCart}   />} > </Route>
         
        <Route path="/women" element={<Women addToCart={addToCart} />}/>
<Route path='/kids' element={<Kids addToCart={addToCart} />}/>
<Route path='/login' element={<Login/>} /> 
<Route path='/cart1' element={<Cart1 cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}  />    
<Route path='/signup'  element={<SignIn/>}/>
        </Routes>
        
<Routes>
  <Route path='/product1' element={<Product1/>} />
  <Route path='/product2' element={<Product2/>} />
  <Route path='/product3' element={<Product3/>} />
  <Route path='/product4' element={<Product4/>} />
</Routes>
     </Router>
    
     </main>
       );

      }
export default App;
