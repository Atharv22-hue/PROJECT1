import React from "react";
import youtube from './youtube.svg';
import instagram from './instagram.svg'
import twitter from './twitter.svg'
function Footer1(){
  
return (
  <footer className="footer">
  <div className="footer-left">
    <h3>learn more</h3>
    About Us<br/>
    Mens<br/>
    Womens<br/>
    Kids<br/>
  </div>
  <div className="footer-center">
    <h3>Our community </h3>
    Offers<br/>
    Terms and Conditions<br/>
  </div>
  <div className="footer-right">
    <h3>Follow us on social media</h3>
    <div className="social-icons">
          <img alt="facebool" src={youtube} target="_blank" rel="noopener noreferrer"/>
          <img  alt='insta' src={instagram} target="_blank" rel="noopener noreferrer"/>
          <img  alt='whatspapp' src={twitter} target="_blank" rel="noopener noreferrer"/>
        
        </div>
  </div>
</footer>
 
    
    
)
}
export default Footer1;