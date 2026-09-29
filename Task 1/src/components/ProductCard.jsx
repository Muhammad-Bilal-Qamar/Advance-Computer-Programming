import React from 'react';
import './ProductCard.css';

/**
 * ProductCard component
 * @param {Object} props
 * @param {string} props.title - The title/name of the product
 * @param {string|number} props.price - The price of the product
 * @param {string} props.category - The category of the product
 */
function ProductCard({ title, price, category }) {
  // Format price if passed as a number or string
  const formattedPrice =
    typeof price === 'number' ? `$${price.toFixed(2)}` : price;

  return (
    <div className="product-card">
      <div className="product-badge">{category}</div>
      <h3 className="product-title">{title}</h3>
      <div className="product-price-section">
        <span className="price-label">Price</span>
        <span className="product-price">{formattedPrice}</span>
      </div>
    </div>
  );
}

export default ProductCard;
