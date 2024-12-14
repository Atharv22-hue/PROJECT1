import React from "react";
import banneroffers from './banneroffer.png'

function Offer(){
return(
    
  <div>
    <img  src={banneroffers} alt=""
 />
    <section className=" bg-center w-full px-4 py-24 mt-26" >
    <div className="bg-offer">
    <div  className="max_padd_container " >
        <h1 className="h2" style={{fontSize:'60px'}}>Summer Sale 50% </h1>
    <h3 className="h3 capitalize" style={{fontSize:'40px',fontFamily:'inherit',fontStyle:'italic'}}>mens leather formal wear clothes</h3>
    <button className="big-button">Shop Now</button>
    </div>
    </div>
   </section> 
  </div>

)
}
export default Offer;
