import React from "react";
import { useState, useEffect, useContext } from "react";
import { getProductDetails } from "./ProductDetails.js";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../cart-details/CartContext.js";

function ProductDetails() {
  var [product, setProduct] = useState({});
  const { id } = useParams();
  const {cart, addToCart } = useContext(CartContext);

  const handleAddToCart = ()=> {
    addToCart(product);
  }

  useEffect(() => {
    getProductDetails(setProduct, id);
  }, [id]);

  return (
    <>
      <section className="details">
        <div className="product-details">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <div className="product-info">
            <h5> {product.title}</h5>
            <h5 style={{ color: "green" }}>$ {product.price}</h5>

            <p
              style={{
                color: "black",
                fontWeight: "bold",
                textAlign: "left",
                fontSize: "20px",
              }}
            >
              {product.category}
            </p>

            <p className="desc" style={{ color: "black", textAlign: "left" }}>
              {product.description}
            </p>
            <h5>⭐ {product?.rating?.rate}</h5>
            <h5>{product?.rating?.count} Unit's</h5>
            <div className="product-Btn">
              <Link to="/products">
                <button>Back To Product</button>
              </Link>

              <button onClick={handleAddToCart}>Add To Cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
