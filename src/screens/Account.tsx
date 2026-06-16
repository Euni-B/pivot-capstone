import { Link } from "react-router-dom";


function Account() {
  return (

    <main className="bg-light-background text-primary-dark">

      {/* Login Section */}
      < section className="mx-auto mb-16 max-w-md" >

        <h2 className="mb-6 text-center font-heading text-4xl text-primary-dark">
          Login
        </h2>

        <form className="flex flex-col gap-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border border-primary-dark bg-light-background px-4 py-3"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="rounded-xl border border-primary-dark bg-light-background px-4 py-3"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="rounded-xl bg-primary-green px-6 py-3 font-semibold text-light-background
            transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="mt-6 text-center font-body">
          New to NeighborGoods?{" "}
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("account-selection")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-semibold text-primary-green hover:underline"
          >
            Register here
          </button>
        </p>

      </section >
      <section
        id="account-selection"
        className="mx-auto  max-w-6xl px-6 py-16"
      >
        {/* Page heading */}
        <div className="text-center">
          <h1 className="font-heading text-4xl text-primary-dark md:text-5xl">
            Join NeighborGoods
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-body text-lg">
            Choose how you want to connect with your local  community.
          </p>
        </div>

        {/* Account choice cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Buyer card */}
          <section className="rounded-3xl border border-primary-dark bg-light-background p-8 shadow-md
           transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-heading text-3xl text-primary-dark">
              Shop Local
            </h2>

            <p className="mt-4 font-body">
              Create an account to discover fresh goods from local farmers,
              makers, and small businesses.
            </p>

            <Link
              to="/account/customer"
              className="mt-6 inline-block rounded-xl bg-primary-green px-6 py-3 font-body
               font-semibold text-light-background transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]
                hover:bg-primary-dark"
            >
              Create Customer Account
            </Link>
          </section>

          {/* Vendor card */}
          <section className="rounded-3xl border border-primary-dark bg-light-background p-8 shadow-md
           transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-heading text-3xl text-primary-dark">
              Sell Local
            </h2>

            <p className="mt-4 font-body">
              Create a vendor account to list your products, grow your reach,
              and connect with nearby customers.
            </p>

            <Link
              to="/account/vendor"
              className="mt-6 inline-block rounded-xl bg-primary-green px-6 py-3 font-body font-semibold 
              text-light-background transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]
               hover:bg-primary-dark"
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