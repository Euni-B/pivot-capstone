import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products() {

  const categories = [
  "All",
  "Produce",
  "Meat & Seafood",
  "Dairy & Eggs",
  "Bakery",
  "Honey & Preserves",
  "Pantry Goods",
  "Prepared Foods",
  "Beverages",
  "Handmade Goods",
  "Home & Decor",
  "Bath & Body",
  "Seasonal",
];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);


  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Page Title */}
      <h1 className="font-heading text-center text-4xl text-primary-dark md:text-5xl">
        NeighborGoods Market
      </h1>

      {/* Category Tabs */}
      <div className="mt-8 flex gap-3 overflow-x-auto pb-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap rounded-full border px-5 py-2 font-body text-sm font-semibold 
              transition-all duration-300 ${selectedCategory === category
                ? "border-primary-green bg-primary-green text-light-background"
                : "border-primary-dark text-primary-dark hover:bg-primary-green/10"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="mt-8 grid gap-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md
      md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Products;