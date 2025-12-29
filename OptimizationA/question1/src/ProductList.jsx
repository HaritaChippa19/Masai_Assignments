import React from "react";

export default function ProductList({ products, onSelect }) {
  console.log("Rendering <ProductList />");

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Products ({products.length})</h3>

      {products.slice(0, 5).map((p) => (
        <div
          key={p.id}
          onClick={() => onSelect(p.id)}
          style={{
            cursor: "pointer",
            padding: "6px 0",
            borderBottom: "1px solid #ccc",
          }}
        >
          {p.name} — ₹{p.price}
        </div>
      ))}

      <p style={{ marginTop: "10px", color: "gray" }}>
        (Showing only first 5 for demo)
      </p>
    </div>
  );
}
