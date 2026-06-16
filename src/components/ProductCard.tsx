import { useNavigate } from "react-router-dom";

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
  // Lets us navigate with code instead of wrapping the whole card in a Link
  const navigate = useNavigate();

  // Sends user to the product details page
  const goToProductDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <article
      onClick={goToProductDetails}
      className="cursor-pointer rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      {/* Product image */}
      <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-primary-green/10">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <p className="font-body text-base text-primary-dark/60">
            Image Coming Soon
          </p>
        )}
      </div>

      <p className="mt-4 font-body text-sm font-semibold text-primary-green">
        {product.category}
      </p>

      <h2 className="mt-1 font-body text-xl font-semibold text-primary-dark">
        {product.name}
      </h2>

      <p className="mt-2 font-body text-base leading-relaxed text-primary-dark/70">
        {product.description}
      </p>

      <p className="mt-3 font-body text-base text-primary-dark/70">
        Seller: {product.seller}
      </p>

      <p className="mt-2 font-body text-base text-accent-gold">
        ★ {product.rating} ({product.reviewCount} reviews)
      </p>

      <p className="mt-3 font-body text-lg font-bold text-primary-green">
        ${product.price.toFixed(2)}
      </p>

      {/* Button has its own click handler */}
      <button
        type="button"
        onClick={(event) => {
          // Stops the card click from firing twice
          event.stopPropagation();
          goToProductDetails();
        }}
        className="mt-5 w-full rounded-full border border-primary-green px-5 py-3 font-body text-base font-semibold text-primary-green transition hover:bg-primary-green hover:text-white"
      >
        View Details
      </button>
    </article>
  );
}

export default ProductCard;