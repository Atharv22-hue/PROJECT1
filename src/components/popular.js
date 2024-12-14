import React,{useState} from "react";
import product_rt_1 from './product_rt_1.png';
import product_rt_2 from './product_rt_2.png';
import product_rt_3 from './product_rt_3.png';
//import Product1 from "./product1";

import { useNavigate } from 'react-router-dom';
function Popular(){
  const navigate = useNavigate();

  const handleHover = () => {
    // Navigate to another page on hover
    navigate('./product1');
  }
  const handleHover2 = () => {
    // Navigate to another page on hover
    navigate('./product2');
  }
  const handleHover3 = () => {
    // Navigate to another page on hover
    navigate('./product3');
  }
  const handleHover4 = () => {
    // Navigate to another page on hover
    navigate('./product4');
  }
  const [cartItems, setCartItems] = useState(0);

  // Function to handle adding items to the cart
  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  return(
    <div className="container mt-5">
      <h2>Popular Products</h2>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div  onClick={handleHover}  className="card">
            <img
              
              src={product_rt_1}
               alt="Hover to Navigate" className="hover-image"
            />
            <div className="card-body">
              <h6>Saloogoe Sweatshirt for women Side Split Fall Fashion 2023 Long Sleeve Shirts Trending Now</h6>
            <button style={{height:'40px',width:'250px',borderRadius:'25px',backgroundColor:'black',color:'white'}}>Shop now</button>
            <button addtocart={addToCart} style={{height:'40px',width:'250px',borderRadius:'25px',backgroundColor:'white',color:'black'}}>Add to cart</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div onClick={handleHover2} className="card">
            <img
              className="card-img-top"
              src={product_rt_2}
              alt="Card 2"
            />
            <div className="card-body">
            <h6>Saloogoe Sweatshirt for women Side Split Fall Fashion 2023 Long Sleeve Shirts Trending Now</h6>
           
              <button style={{height:'40px',width:'250px',borderRadius:'25px',backgroundColor:'black',color:'white'}}>Shop now</button>
              <button style={{height:'40px',width:'250px',borderRadius:'25px',backgroundColor:'white',color:'black'}}>Add to cart</button>
              </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card" onClick={handleHover3}>
            <img
              className="card-img-top"
              src={product_rt_3}
              alt="Card 3"
            />
            <div className="card-body">
            <h6>Saloogoe Sweatshirt for women Side Split Fall Fashion 2023 Long Sleeve Shirts Trending Now</h6>
            <button style={{height:'40px',width:'250px',borderRadius:'25px',backgroundColor:'black',color:'white'}}>Shop now</button>
            <button style={{height:'40px',width:'250px',borderRadius:'25px',backgroundColor:'white',color:'black'}}>Add to cart</button>

            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card" onClick={handleHover4}>
            <img
              className="card-img-top"
              src={product_rt_3}
              alt="Card 4"
            />
            <div className="card-body">
            <h6>Saloogoe Sweatshirt for women Side Split Fall Fashion 2023 Long Sleeve Shirts Trending Now</h6>
            <button style={{height:'40px',width:'250px',borderRadius:'25px',backgroundColor:'black',color:'white'}}>Shop now</button>
            <button style={{height:'40px',width:'250px',borderRadius:'25px',backgroundColor:'white',color:'black'}}>Add to cart</button>
            </div>
          </div>
        </div>
        </div>
        </div>
  )
  };


export default Popular;