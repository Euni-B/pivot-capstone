import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products() {
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