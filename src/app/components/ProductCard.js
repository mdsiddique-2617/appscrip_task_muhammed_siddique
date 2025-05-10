"use client";
import ProductCardStyles from '../styles/productcard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={ProductCardStyles.product_card}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p className={ProductCardStyles.product_catogory}>{product.category}</p>
      <p>${product.price}</p>
      <h6>{`Rating: ${product.rating.rate}/5`}</h6>
      <button>Add to Cart</button>
    </div>
  );
}