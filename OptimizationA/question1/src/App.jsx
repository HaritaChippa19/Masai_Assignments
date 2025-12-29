import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

export default function App() {
  const [products] = useState(() =>
    Array.from({ length: 5000 }).map((_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
    }))
  );

  const [count, setCount] = useState(0);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((acc, item) => acc + item.price, 0);
  }, [products]);

  const handleSelect = useCallback((id) => {
    console.log("Selected product ID:", id);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Performance Optimization Demo</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter: {count}
      </button>

      <h3>Total Price of Products: {totalPrice}</h3>

      <ProductList products={products} onSelect={handleSelect} />
    </div>
  );
}
