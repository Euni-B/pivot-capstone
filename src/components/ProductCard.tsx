// This describes what one product looks like
interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
  category: string;
  image: string;
}

// This describes what this component receives
interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Product image placeholder */}
      <div className="flex h-40 items-center justify-center rounded-2xl bg-primary-green/10">
        <p className="font-body text-base text-primary-dark/60">
          Image Coming Soon
        </p>
      </div>

      {/* Product name */}
      <h2 className="mt-4 font-body text-xl font-semibold text-primary-dark">
        {product.name}
      </h2>

      {/* Seller */}
      <p className="mt-2 font-body text-base text-primary-dark/70">
        Seller: {product.seller}
      </p>

      {/* Category */}
      <p className="font-body text-base text-primary-dark/70">
        Category: {product.category}
      </p>

      {/* Price */}
      <p className="mt-3 font-body text-lg font-bold text-primary-green">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
}

export default ProductCard;