import React from "react";
import bannerkids from './bannerkids.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import product_25 from './product_25.png';
import product_26 from './product_26.png';
import product_27 from './product_27.png';
import product_28 from './product_28.png';
import product_29 from './product_29.png';
import product_30 from './product_30.png';
import product_31 from './product_31.png';
import product_32 from './product_32.png';
function Kids({addToCart}){
  const handleAddToCart = (item) => {
    addToCart(item);
  };
  const products = [
    {
      id: 1,
      name: "mechanic",
      price: 400,
      image: product_25,
    },
    {
      id: 2,
      name: "Blue",
      price: 500,
      image: product_26,
    },
    {
      id: 3,
      name: "red",
      price: 500,
      image: product_27,
    },
    {
      id: 4,
      name: "green",
      price: 400,
      image: product_28,
    },
    {
      id: 5,
      name: "black",
      price: 500,
      image: product_29,
    },
    {
      id: 6,
      name: "geenc",
      price: 500,
      image: product_30,
    },
    {
      id: 8,
      name: "blue hoodie",
      price: 600,
      image: product_31,
    },
    {
      id: 9,
      name: "black",
      price: 500,
      image: product_32,
    },
  ]
    return(
        <div>
            <img src={bannerkids} alt=""/>
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      
      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "25px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: "200px",
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
                height: "250px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "10px" }}>
              <h3 style={{ fontSize: "18px", margin: "10px 0" }}>
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
        </div>
    
    )}
export default Kids;