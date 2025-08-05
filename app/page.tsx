"use client";

import { useState, useEffect } from "react";
import styles from "../styles/page.module.css";
// import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  created_at: string;
}

export default function Home() {
  // BOILERPLATE CODE, DO NOT TOUCH
  // -------------------------------
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const result = await response.json();
        
        if (result.success) {
          setProducts(result.data);
        } else {
          setError(result.error || 'Failed to fetch products');
        }
      } catch (err) {
        setError('Failed to fetch products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ADD YOUR CODE HERE
  // +++++++++++++++++++++++++++++++




  // +++++++++++++++++++++++++++++++
  if (loading) {
    return (
      <div className={styles.page}>
        <h1>Loading products...</h1>
      </div>
    );
  }

  // BEGINS UI CODE, EXTEND AS NEEDED
  // +++++++++++++++++++++++++++++++
  return (
    <div className={styles.page}>
      <h1>Products</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px', fontWeight: 'bold' }}>
                {product.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  // +++++++++++++++++++++++++++++++
}
