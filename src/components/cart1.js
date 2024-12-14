import React from "react";
import { Link } from "react-router-dom";

function Cart1({ cart, removeFromCart }) {
  return (
    <div style={{ padding: "20px" }}>
  
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              {item.name} - ${item.price.toFixed(2)}
              <button
                style={{
                  marginLeft: "10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px",
                  cursor: "pointer",
                }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
}

export default Cart1;
