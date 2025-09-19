import React, { useEffect, useState } from "react";

function ProductSearch() {
  const [products, setProducts] = useState([]); // All products
  const [search, setSearch] = useState("");     // Search text
  const [filtered, setFiltered] = useState([]); // Filtered products

  // Fetch products on mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data); // Initially show all
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Update filtered products when search changes
  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [ products]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Product Search</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      {/* Product List */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {filtered.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <h4 style={{ fontSize: "14px", margin: "10px 0" }}>
              {product.title}
            </h4>
            <p style={{ fontWeight: "bold", color: "green" }}>
              ${product.price}
            </p>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filtered.length === 0 && <p>No products found.</p>}
    </div>
  );
}

export default ProductSearch;
