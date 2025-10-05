import React, { useContext } from "react";
import { CartContext } from "./CartContext.js";
import "./CartDetails.css";

function CartDetails() {
  const { cart, addToCart } = useContext(CartContext);

  function increment(item) {
    addToCart(item);
  }

  const decrement = (item) => {
    // Decrement quantity logic
    if (item.qty > 1) {
      const upsetcart = cart.map((c) =>
        c.id === item.id ? { ...c, qty: c.qty - 1 } : c
      );
      setCart(upsetcart);
    } else {
      const upsetcart = cart.filter((c) => c.id !== item.id);
      setCart(upsetcart);
    }
  };

  return (
    <div
      style={{
        padding: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {cart.map(function (item) {
          return (
            <div className="cart">
              <img src={item.image} alt="" width="15%" height="100px" />
              <div className="content">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
              <div>
                <button onClick={()=>decrement(item)}>-</button>
                <button>{item.qty}</button>
                <button onClick={() => increment(item)}> +</button>
              </div>
            </div>
          );
        })}
        <div>
          <h4>
            Total Price : $
            {cart
              .reduce((total, item) => total + item.price * item.qty, 0)
              .toFixed(2)}
          </h4>
          <button style={{ width: "100%" }}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartDetails;
