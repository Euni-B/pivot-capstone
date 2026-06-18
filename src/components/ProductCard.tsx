import { useNavigate } from "react-router-dom";
// This interface describes what one product object must look like.
// TypeScript uses this as a checklist to make sure every product
// has the correct pieces of information.
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

// This interface describes the props this component expects.
// ProductCard must receive one product object in order to display it.
interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {

  // useNavigate lets this component send the user to another page
  // through code instead of using a regular link.
  const navigate = useNavigate();

  // This function builds the correct product details URL
  // using the product's id.
  const goToProductDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (

    // The whole card is clickable.
    // When clicked, it sends the user to this product's details page.
    <article
      onClick={goToProductDetails}
      className="cursor-pointer rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 ease-out
      hover:-translate-y-1 hover:shadow-md"
    >

      {/* 
        Product image area.

        If the product has an image, show it.
        If not, show a simple placeholder message instead.
      */}
      <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-primary-green/10
      transition-transform duration-500 ease-out hover:scale-105">
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

      {/* Product category label */}
      <p className="mt-4 font-body text-sm font-semibold text-primary-dark/90">
        {product.category}
      </p>

      {/* Product name */}
      <h2 className="mt-1 font-body text-xl font-semibold text-primary-dark">
        {product.name}
      </h2>

      {/* Short product description */}
      <p className="mt-2 font-body text-base leading-relaxed text-primary-dark/90">
        {product.description}
      </p>

      {/* Seller name */}
      <p className="mt-3 font-body text-base text-primary-dark/90">
        Seller: {product.seller}
      </p>

      {/* Rating and review count */}
      <p className="mt-2 font-body text-base text-primary-dark/90">
        ★ {product.rating} ({product.reviewCount} reviews)
      </p>

      {/* 
        Product price.

        toFixed(2) makes sure the price always displays
        with two decimal places, like 5.00 instead of 5.
      */}
      <p className="mt-3 font-body text-lg font-bold text-primary-dark/90">
        ${product.price.toFixed(2)}
      </p>

      {/* 
        Button also sends the user to the details page.

        stopPropagation prevents the button click from also triggering
        the card's click event at the same time.
      */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          goToProductDetails();
        }}
        className="mt-5 w-full rounded-full border border-primary-dark/90 px-5 py-3 font-body text-base font-semibold
         text-primary-dark/90 transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]
         hover:bg-primary-green hover:text-white"
      >
        View Details
      </button>
    </article>
  );
}

export default ProductCard;