"use client";
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductGridStyles from '../styles/productgrid.module.css';

export default function ProductGrid(rating) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const apiCall = () => {
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => setProducts(data));
      }    
      apiCall();
    }, []);

    return (
      <div className={ProductGridStyles.product_grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} rating={rating} />
        ))}
      </div>
    );
}