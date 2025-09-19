import React, { useState } from "react";

function Searchsimple() {
  const [products, setProducts] = useState([]); // All products
  const [search, setSearch] = useState("");     // Search text

  // Fetch products when button is clicked
  function loadProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error fetching products:", err));
  }

  // Filter products directly when rendering
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Product Search</h2>

      {/* Button to load products */}
      <button
        onClick={loadProducts}
        style={{
          padding: "10px",
          marginBottom: "15px",
          backgroundColor: "lightblue",
          border: "1px solid #999",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Load Products
      </button>

      <br />

      {/* Search box */}
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          border: "1px solid gray",
          borderRadius: "4px",
        }}
      />

      <hr />

      {/* Show products */}
      {filtered.length > 0 ? (
        filtered.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "60px", height: "60px", objectFit: "contain" }}
            />
            <p style={{ fontWeight: "bold" }}>{product.title}</p>
            <p style={{ color: "green" }}>${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products found. (Click Load Products)</p>
      )}
    </div>
  );
}

export default Searchsimple;
