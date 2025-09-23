import React, { useState, useEffect } from "react";
import "./Product.css";
import { getProducts } from "./Product.js";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <div>
      {console.log(products)}
      <section className="product-banner">
        <h2>Electronics Product Information</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          similique ut omnis accusantium odit voluptas labore consequatur, amet
          laudantium pariatur! Dolore blanditiis molestiae, totam, sit fuga
          sapiente suscipit nesciunt fugit libero ducimus doloribus.
          Voluptatibus reiciendis saepe tenetur impedit vitae. Iste praesentium
          vero ut molestiae perferendis magnam adipisci, provident recusandae
          minus.
        </p>
      </section>
      <section className="product-category">
        <div>
          <img
            src="https://eatvita.co.uk/wp-content/uploads/2022/04/all-products.svg"
            alt=""
            height={80}
            width={80}
          />
          <h6>All</h6>
        </div>
        <div>
          <img
            src="https://flare.pk/wp-content/uploads/2023/01/1-1.jpg"
            alt=""
            height={80}
            width={80}
          />
          <h6>Electronic</h6>
        </div>
        <div>
          <img
            src="https://static.wixstatic.com/media/bb2928_d6e78300457046168a3d27164230c187~mv2.jpg/v1/fill/w_824,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/May%2520Emerald%2520plant%2520(1)_edited.jpg"
            alt=""
            height={80}
            width={80}
          />
          <h6>Jewelry</h6>
        </div>
        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            height={80}
            width={80}
          />
          <h6>Men's</h6>
        </div>
        <div>
          <img
            src="https://img.faballey.com/images/Product/XKS03763F/d3.jpg"
            alt=""
            height={80}
            width={80}
          />
          <h6>Women's</h6>
        </div>
      </section>
      <section className="product-data">
        {products.length == 0 ? (
          <p>No Products Found</p>
        ) : (
          products.map(function (product) {
            return (
              <div className="card">
                <img src={product.image} alt="" width="100%" height={200} />
                <h5>{product.title}</h5>
                <p>${product.price}</p>
                <h6>{product.category}</h6>
                <div className="card-button">
                  <button>Product Details</button>
                  <button>Add-To-Card</button>
                </div>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
}

export default Products;
