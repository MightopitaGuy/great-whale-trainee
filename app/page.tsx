"use client";

import { useState, useEffect } from "react";
import styles from "../styles/page.module.css";
import Image from "next/image";
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
  const [carrito, setCarrito] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const result = await response.json();

        if (result.success) {
          setProducts(result.data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const agregar = (id: string) => {
    const nuevoCarro = new Map(carrito);
    const antiguoValor = nuevoCarro.get(id);
    let nuevoValor = 1;
    if (antiguoValor != undefined) {
      nuevoValor = antiguoValor + 1;
    }
    nuevoCarro.set(id, nuevoValor);
    setCarrito(nuevoCarro);
  };

  const eliminar = (id: string) => {
    const nuevoCarro = new Map(carrito);
    const antiguoValor = nuevoCarro.get(id);
    if (antiguoValor == undefined) return;
    else if (antiguoValor === 1) {
      nuevoCarro.delete(id);
    } else {
      nuevoCarro.set(id, antiguoValor - 1);
    }
    setCarrito(nuevoCarro);
  };

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
      {Array.from(carrito.keys()).map((producto) => {
        return (
          <div key={crypto.randomUUID()}>
            <p>{producto}</p>
            <p>{carrito.get(producto)}</p>
          </div>
        );
      })}
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <tbody>
          {products.map((product) => (
            <tr key={product.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "12px", fontWeight: "bold" }}>
                <Image
                  width={30}
                  height={30}
                  src={product.image}
                  alt={`Product ${product.name} image`}
                ></Image>
                <p>{product.name}</p>
                <p>
                  {new Intl.NumberFormat("es-MX", {
                    style: "currency",
                    currency: "MXN",
                  }).format(product.price)}
                </p>
                <button
                  onClick={() => {
                    agregar(product.id);
                  }}
                >
                  Agregar
                </button>
                <button
                  onClick={() => {
                    eliminar(product.id);
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  // +++++++++++++++++++++++++++++++
}
