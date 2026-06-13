import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

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
        <section className="mt-14">
          <h2 className="text-center font-heading text-3xl text-primary-dark md:text-4xl">
            Featured Products
          </h2>

          {/* Product row with visible scroll buttons */}
          <div className="mt-8 flex items-center gap-4">
            <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-green text-xl text-primary-green transition hover:bg-primary-green hover:text-white">
              ←
            </button>

            <div className="grid flex-1 gap-6 md:grid-cols-3">
              {/* Placeholder Product Card 1 */}
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <div className="flex h-40 items-center justify-center rounded-2xl bg-primary-green/10">
                  <p className="font-body text-base text-primary-dark/60">
                    Image
                  </p>
                </div>

                <h3 className="mt-4 font-body text-lg font-semibold">
                  Local Product
                </h3>

                <p className="mt-1 font-body text-base text-primary-dark/70">
                  Product placeholder
                </p>
              </div>

              {/* Placeholder Product Card 2 */}
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <div className="flex h-40 items-center justify-center rounded-2xl bg-accent-gold/20">
                  <p className="font-body text-base text-primary-dark/60">
                    Image
                  </p>
                </div>

                <h3 className="mt-4 font-body text-lg font-semibold">
                  Fresh Goods
                </h3>

                <p className="mt-1 font-body text-base text-primary-dark/70">
                  Product placeholder
                </p>
              </div>

              {/* Placeholder Product Card 3 */}
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <div className="flex h-40 items-center justify-center rounded-2xl bg-primary-dark/10">
                  <p className="font-body text-base text-primary-dark/60">
                    Image
                  </p>
                </div>

                <h3 className="mt-4 font-body text-lg font-semibold">
                  Handmade Item
                </h3>

                <p className="mt-1 font-body text-base text-primary-dark/70">
                  Product placeholder
                </p>
              </div>
            </div>

            <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-green text-xl text-primary-green transition hover:bg-primary-green hover:text-white">
              →
            </button>
          </div>
        </section>

        {/* REVIEWS + SELLER SECTION */}
        <section className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Customer Reviews */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="font-heading text-3xl text-primary-dark">
              Product Reviews
            </h2>

            <p className="mt-4 font-body text-xl text-accent-gold">
              ★★★★★
            </p>

            <p className="mt-4 font-body text-base leading-relaxed text-primary-dark/75">
              “I found fresh produce and handmade goods from sellers right in my
              community.”
            </p>

            <p className="mt-4 font-body text-base font-semibold text-primary-green">
              — Local Shopper
            </p>
          </div>

          {/* Become a Seller */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="font-heading text-3xl text-primary-dark">
              Sell on NeighborGoods
            </h2>

            <p className="mt-4 font-body text-base leading-relaxed text-primary-dark/75">
              Share your produce, handmade goods, and specialty items with
              customers who want to support local sellers.
            </p>

            <button
              onClick={() => navigate("/account")}
              className="mt-6 rounded-full bg-accent-gold px-8 py-4 font-body text-base font-semibold text-primary-dark transition hover:bg-primary-green hover:text-white"
            >
              Become a Seller
            </button>

            <ul className="mt-6 space-y-2 font-body text-base text-primary-dark/75">
              <li>• Reach local customers</li>
              <li>• Build trust in your community</li>
              <li>• Sell without needing your own website</li>
              <li>• Grow your business locally first</li>
            </ul>
          </div>
        </section>

      </section>
    </main>
  );
}

export default Home;