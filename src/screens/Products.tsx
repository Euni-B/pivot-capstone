import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

// Product shape from our database
interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
  category: string;
  image: string;
}

function Products() {
  // Store products from the API
  const [products, setProducts] = useState<Product[]>([]);

  // Run once when page loads
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Page Title */}
      <h1 className="font-heading text-center text-4xl text-primary-dark md:text-5xl">
        Marketplace
      </h1>

      {/* Product Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Products;