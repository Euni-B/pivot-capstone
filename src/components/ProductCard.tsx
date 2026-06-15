interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
}

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

      {/* Category */}
      <p className="mt-4 font-body text-sm font-semibold text-primary-green">
        {product.category}
      </p>

      {/* Product name */}
      <h2 className="mt-1 font-body text-xl font-semibold text-primary-dark">
        {product.name}
      </h2>

      {/* Description */}
      <p className="mt-2 font-body text-base leading-relaxed text-primary-dark/70">
        {product.description}
      </p>

      {/* Seller */}
      <p className="mt-3 font-body text-base text-primary-dark/70">
        Seller: {product.seller}
      </p>

      {/* Rating */}
      <p className="mt-2 font-body text-base text-accent-gold">
        ★ {product.rating} ({product.reviewCount} reviews)
      </p>

      {/* Price */}
      <p className="mt-3 font-body text-lg font-bold text-primary-green">
        ${product.price.toFixed(2)}
      </p>

      {/* Future details button */}
      <button className="mt-5 w-full rounded-full border border-primary-green px-5 py-3 font-body text-base font-semibold text-primary-green transition hover:bg-primary-green hover:text-white">
        View Details
      </button>
    </div>
  );
}

export default ProductCard;