import React, { useState } from "react";
import product_1 from './product_1.png'
function Product1(){
      // State to manage selected size
  const [selectedSize, setSelectedSize] = useState("");

  // Function to handle size selection
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
    return (
        <div>
  <div className="product-page">
      <div className="product-container">
        {/* Left Section: Image */}
        <div className="product-image">
          <img
            src={product_1}
            alt="Product"
            className="product-img"
          />
        </div>

        {/* Right Section: Product Info */}
        <div className="product-details">
          <h1 className="product-title">"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</h1>
          <p className="product-price">
            <strong>Rs. 50</strong>
          </p>
          <div className="size-selector">
      <h3>Select Size:</h3>
      <div className="size-options">
        {["M", "L", "XL"].map((size) => (
          <div
            key={size}
            className={`size-option ${selectedSize === size ? "selected" : ""}`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
          <div className="product-rating">
            ⭐⭐⭐⭐☆ (4.5)
          </div>

          {/* Add to Cart Button */}
          <div className="product-add-to-cart">
            <button className="add-to-cart-button">Buy it now</button><br/>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>

          {/* Product Features */}
          <div className="product-features">
            <h3>Product Features:</h3>
            <ul>
              <li>Feature 1: High quality material</li>
              <li>Feature 2: Long battery life</li>
              <li>Feature 3: Elegant design</li>
              <li>Feature 4: Affordable price</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
};
export default Product1;