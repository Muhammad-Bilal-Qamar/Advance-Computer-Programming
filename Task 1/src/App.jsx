import React from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Product Showcase</h1>
      </header>

      <main className="product-grid">
        {/* Product 1 */}
        <ProductCard
          title="Wireless Noise-Canceling Headphones"
          price={199.99}
          category="Electronics"
        />

        {/* Product 2 */}
        <ProductCard
          title="Ergonomic Executive Office Chair"
          price={249.5}
          category="Furniture"
        />
      </main>
    </div>
  );
}

export default App;
