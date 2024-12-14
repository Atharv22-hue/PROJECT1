import React from "react";
import bannerwomen from './bannerwomens.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import product_1 from './product_1.png';
import product_2 from './product_2.png';
import product_5 from './product_5.png';
import product_4 from './product_4.png';

function Women({addToCart}){
  const products = [
    {
      id: 1,
      name: "coat ",
      price: 1000,
      image: product_1,
    },
    {
      id: 2,
      name: "blue t shirt women",
      price: 700,
      image: product_2,
    },
    {
      id: 3,
      name: "t shirt",
      price: 700,
      image: product_4,
    },
    {
      id: 4,
      name: "red hoodie ",
      price: 800,
      image: product_5,
    },
  ]
  const handleAddToCart = (item) => {
    addToCart(item);
  };
    return(
        <div>

      <img src={bannerwomen} alt=""/>
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

      
  )
}
export default Women;