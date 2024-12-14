import React, { useState } from 'react';
import CartIcon from './cart';
import {Link} from 'react-router-dom';
import logo from './logo.svg'

//import { Link } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems,setCartItems] = useState(4); 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  
      return (
   
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt='f'/>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to='/'>Home</Link></li>
  <li> <Link to='/Men' addToCart={addToCart}>  Men</Link></li>
        <li><Link to='/women'>Women</Link></li>
        <li><Link to='/kids'>Kids</Link></li>
 <li><Link to='/Login' >Login</Link>  </li>
 <li><Link to='/cart1'><CartIcon    addToCart={addToCart}  removeFromCart={removeFromCart} /></Link>

  </li>
      </ul>
    </nav>
  );

}
export default Navbar;
