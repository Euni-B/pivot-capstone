import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
        <section className="mx-auto max-w-4xl px-6 py-12 text-center">
          <h1 className="font-heading text-4xl leading-tight text-primary-dark md:text-5xl">
            Discover Local Goods From People Near You.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-primary-dark/75 md:text-lg">
            NeighborGoods connects local buyers with nearby farmers, makers, and small
            businesses offering fresh produce, handmade goods, and community-made
            products.
          </p>
        </section>

        {/* PRIMARY CTA */}
        <div className="my-8 flex justify-center">
          <button
            onClick={() => navigate("/products")}
            className="rounded-full bg-primary-green px-8 py-4 font-body text-base font-semibold text-white transition hover:bg-primary-dark">
            Browse Marketplace
          </button>
        </div>

        {/* FEATURED PRODUCTS */}
        <div className="grid flex-1 gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Placeholder image */}
              <div className="flex h-40 items-center justify-center rounded-2xl bg-primary-green/10">
                <p className="font-body text-base text-primary-dark/60">
                  Image Coming Soon
                </p>
              </div>

              {/* Category */}
              <p className="mt-4 font-body text-sm font-semibold text-primary-green">
                {product.category}
              </p>

              {/* Product Name */}
              <h3 className="mt-1 font-body text-lg font-semibold text-primary-dark">
                {product.name}
              </h3>

              {/* Price */}
              <p className="mt-2 font-body text-lg font-bold text-primary-green">
                ${product.price.toFixed(2)}
              </p>
            </Link>
          ))}
        </div>


        {/* REVIEWS + SELLER SECTION */}
        <section className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Customer Reviews */}
          <div className="p-4">
            <h2
              className="font-heading text-3xl text-primary-dark"
              data-aos="fade-up"
            >
              What Our Community Says
            </h2>

            <div
              key={currentReview}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
              className="mt-6"
            >
              <p className="text-2xl text-accent-gold">
                {"★".repeat(reviews[currentReview].rating)}
              </p>

              <p className="mt-6 font-body text-lg italic leading-relaxed text-primary-dark/75">
                "{reviews[currentReview].review}"
              </p>

              <p className="mt-6 font-body text-base font-semibold text-primary-green">
                — {reviews[currentReview].customer}
              </p>
            </div>
          </div>
          {/* nBecome a Seller */}
          <div className="p-4">

            <button
              onClick={() => navigate("/account")}
              className="mt-6 mb-6 rounded-full bg-accent-gold px-8 py-4 font-body text-base font-semibold text-primary-dark transition hover:bg-primary-green hover:text-white"
            >
              Become a Seller
            </button>


            <div className="mt-6">
              <h3 className="font-body text-lg font-semibold text-primary-dark">
                Why Sell With NeighborGoods?
              </h3>

              <ul className="mt-4 space-y-3 font-body text-base text-primary-dark/75">
                <li>• Connect directly with local buyers looking to shop small.</li>

                <li>• Choose a seller plan that fits your business size and goals.</li>

                <li>• Manage products through one simple dashboard.</li>

                <li>• Grow your customer base without building your own marketplace.</li>

                <li>• Keep more focus on your products and less on marketing.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main >
  );
}

export default Home;