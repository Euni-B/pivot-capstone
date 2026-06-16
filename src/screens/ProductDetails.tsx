import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  // Gets the product id from the URL
  const { id } = useParams();

  // Lets us send the user to the cart after adding an item
  const navigate = useNavigate();

  // Gives us access to the cart function
  const { addToCart } = useCart();

  // Finds the matching product
  const product = products.find((item) => item.id === Number(id));

  // If no product matches the URL
  if (!product) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="font-heading text-4xl text-primary-dark">
          Product Not Found
        </h1>

        <Link
          to="/products"
          className="mt-6 inline-block rounded-full bg-primary-green px-6 py-3 font-body text-base font-semibold text-white"
        >
          Back to Marketplace
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Back Link */}
      <Link
        to="/products"
        className="font-body text-base font-semibold text-primary-green"
      >
        ← Back to Marketplace
      </Link>

      {/* Product Detail Layout */}
      <section className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Product Image Placeholder */}
        <div className="h-80 overflow-hidden rounded-3xl bg-primary-green/10 md:h-[520px]">
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

      {/* Product Info */}
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="font-body text-sm font-semibold text-primary-green">
          {product.category}
        </p>

        <h1 className="mt-2 font-heading text-4xl text-primary-dark md:text-5xl">
          {product.name}
        </h1>

        <p className="mt-4 font-body text-base leading-relaxed text-primary-dark/75">
          {product.description}
        </p>

        <p className="mt-4 font-body text-base text-primary-dark/75">
          Seller: {product.seller}
        </p>

        <p className="mt-3 font-body text-base text-accent-gold">
          ★ {product.rating} ({product.reviewCount} reviews)
        </p>

        <p className="mt-6 font-body text-3xl font-bold text-primary-green">
          ${product.price.toFixed(2)}
        </p>

        <button
          type="button"
          onClick={() => {
            // Adds this product to the cart
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              seller: product.seller,
              image: product.image,
            });

            // Sends user to cart page
            navigate("/cart");
          }}
          className="mt-8 w-full rounded-full bg-primary-green px-8 py-4 font-body text-base font-semibold text-white transition hover:bg-primary-dark"
        >
          Add to Cart
        </button>
      </div>
    </section>
    </main >
  );
}

export default ProductDetails;