// Link lets the buttons move users to the correct account form
import { Link } from "react-router-dom";


function Account() {
  return (
    <main className="bg-light-background text-primary-dark">
      <section className="mx-auto max-w-6xl px-6 py-16">

        {/* Page heading */}
        <div className="text-center">
          <h1 className="font-heading text-4xl text-primary-green md:text-5xl">
            Join NeighborGoods
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-body text-lg">
            Choose how you want to connect with your local  community.
          </p>
        </div>

        {/* Account choice cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Buyer card */}
          <section className="rounded-3xl border border-primary-green bg-light-background p-8 shadow-md">
            <h2 className="font-heading text-3xl text-primary-green">
              Shop Local
            </h2>

            <p className="mt-4 font-body">
              Create an account to discover fresh goods from local farmers,
              makers, and small businesses.
            </p>

            <Link
              to="/account/customer"
              className="mt-6 inline-block rounded-xl bg-primary-green px-6 py-3 font-body font-semibold text-light-background transition-transform duration-300 hover:scale-105"
            >
              Create Customer Account
            </Link>
          </section>

          {/* Vendor card */}
          <section className="rounded-3xl border border-primary-green bg-light-background p-8 shadow-md">
            <h2 className="font-heading text-3xl text-primary-green">
              Sell Local
            </h2>

            <p className="mt-4 font-body">
              Create a vendor account to list your products, grow your reach,
              and connect with nearby customers.
            </p>

            <Link
              to="/account/vendor"
              className="mt-6 inline-block rounded-xl bg-accent-gold px-6 py-3 font-body font-semibold text-primary-dark transition-transform duration-300 hover:scale-105"
            >
              Become a Vendor
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Account;