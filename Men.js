import React from "react";
import banner from './bannermens.png';
import { useState } from "react";

import product_13 from './product_13.png';
import product_14 from './product_14.png';
import product_15 from './product_15.png';
import product_16 from './product_16.png';
import product_17 from './product_17.png';
import product_18 from './product_18.png';
import product_19 from './product_19.png';
import product_20 from './product_20.png';
import product_21 from './product_21.png';
import product_22 from './product_22.png';
import product_23 from './product_23.png';
//import product_24 from './product_24.png';

import Cart1 from "../components/cart1";



function Men({ addToCart }) {
  // Sample product list with images
  const products = [
    {
      id: 1,
      name: "green t shirt0",
      price: 500,
      image: product_13,
    },
    {
      id: 2,
      name: "hoodie",
      price: 500,
      image: product_14,
    },
    {
      id: 3,
      name: "Coat",
      price: 1000,
      image: product_15,
    },
    {
      id: 4,
      name: "yellow t shirt",
      price: 500,
      image: product_16,
    },
    {
      id: 5,
      name: "coat",
      price: 1030,
      image: product_17,
    },
    {
      id: 6,
      name: "green shirt",
      price: 800,
      image: product_18,
    },
    {
      id: 7,
      name: "coat",
      price: 1500,
      image: product_19,
    },
    {
      id: 8,
      name: "blue jacket",
      price: 600,
      image: product_20,
    },
    {
      id: 9,
      name: "white hoodie",
      price: 1000,
      image: product_22,
    },
    {
      id: 10,
      name: "blue t shirt",
      price: 500,
      image: product_23,
    },
    {
      id: 11,
      name: "blue t shirt",
      price: 500,
      image: product_23,
    },
  ];

  return (
    
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
  <img src={banner} alt="Banner" style={{ width: "100%", marginBottom: "20px" }} />
  <div
    style={{
      display: "flex",
      gap: "110px",
    
      marginTop: "25px",
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: "1000px", // Adjust width for 4 cards
      margin: "0 auto", // Center the container
    }}
  >
    {products.map((product) => (
      <div
        key={product.id}
        style={{
          width: "calc(25% - 20px)", // Adjust for 4 cards in a row
          border: "1px solid #ddd",
          borderRadius: "8px",
  
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
        <div style={{ padding: "10px" }}>
          <h3 style={{ fontSize: "18px", margin: "20px 0" }}>
            {product.name}
          </h3>
          <p style={{ margin: "10px 0", color: "#555" }}>
            Price: ${product.price.toFixed(2)}
          </p>
          <button
            onClick={() => addToCart(product)}
            style={{
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#007BFF",
              color: "#fff",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Men;

