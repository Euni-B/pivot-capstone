import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import { reviews } from "../data/reviews";

function Home() {
  const navigate = useNavigate();
  const [currentReview, setCurrentReview] = useState(0);
  const featuredProducts = products.slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((previousReview) =>
        previousReview === reviews.length - 1 ? 0 : previousReview + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);



  return (
    <main className="bg-light-background text-primary-dark">
      {/* Main page container */}
      <section className="mx-auto max-w-6xl px-6 py-12">

        {/* HERO SECTION */}
        <section className="mx-auto max-w-4xl rounded-3xl border border-primary-green/20 bg-white px-6 py-12 text-center shadow-sm">
          <h1 className="font-heading text-4xl leading-tight text-primary-dark md:text-5xl">
            Discover Local Goods From People Near You.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-primary-dark/75 md:text-lg">
            Shop fresh produce, handmade goods, and community-made products from
            local sellers in one trusted marketplace.
          </p>
        </section>

        {/* PRIMARY CTA */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate("/products")}
            className="rounded-full bg-primary-green px-8 py-4 font-body text-base font-semibold text-white transition hover:bg-primary-dark">
            Browse Marketplace
          </button>
        </div>

        {/* FEATURED PRODUCTS */}
        <div className="grid flex-1 gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl bg-white p-5 shadow-sm"
            >
              {/* Placeholder image */}
              <div className="flex h-40 items-center justify-center rounded-2xl bg-primary-green/10">
                <p className="font-body text-base text-primary-dark/60">
                  Image Coming Soon
                </p>
              </div>

              {/* Product name */}
              <h3 className="mt-4 font-body text-lg font-semibold text-primary-dark">
                {product.name}
              </h3>

              {/* Seller */}
              <p className="mt-1 font-body text-base text-primary-dark/70">
                {product.seller}
              </p>

              {/* Price */}
              <p className="mt-2 font-body text-base font-bold text-primary-green">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>



        {/* REVIEWS + SELLER SECTION */}
        <section className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Customer Reviews */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="font-heading text-3xl text-primary-dark">
              Product Reviews
            </h2>

            <p className="mt-4 font-body text-xl text-accent-gold">
              {"★".repeat(reviews[currentReview].rating)}
            </p>

            <p className="mt-4 font-body text-base leading-relaxed text-primary-dark/75">
              “{reviews[currentReview].review}”
            </p>

            <p className="mt-4 font-body text-base font-semibold text-primary-green">
              — {reviews[currentReview].customer}
            </p>
          </div>

          {/* nBecome a Seller */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">

             <button
              onClick={() => navigate("/account")}
              className="mt-6 mb-6 rounded-full bg-accent-gold px-8 py-4 font-body text-base font-semibold text-primary-dark transition hover:bg-primary-green hover:text-white"
            >
              Become a Seller
            </button>


            <p className="mt-4 font-body text-base leading-relaxed text-primary-dark/75">
              Share your produce, handmade goods, and specialty items with
              customers who want to support local sellers.
            </p>

           
            <ul className="mt-6 space-y-2 font-body text-base text-primary-dark/75">
              <li>• Reach local customers</li>
              <li>• Build trust in your community</li>
              <li>• Sell without needing your own website</li>
              <li>• Grow your business locally first</li>
            </ul>
          </div>
        </section>
      </section>
    </main >
  );
}

export default Home;