import { useState } from "react";

function CustomerAccount() {
  // This remembers which customer plan was selected
  const [selectedPlan, setSelectedPlan] = useState<"free" | "premium" | null>(
    null
  );

  return (
    <main className="bg-light-background text-primary-dark">
      <section className="mx-auto max-w-6xl px-6 py-16">

        {/* If no plan is selected yet, show the membership cards */}
        {selectedPlan === null && (
          <>
            <h1 className="font-heading text-4xl text-primary-dark">
              Choose Your Customer Membership
            </h1>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Free plan */}
              <div className="rounded-2xl border border-primary-dark p-6
              transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                <h2 className="font-heading text-3xl text-primary-dark">
                  Free
                </h2>

                <ul className="mt-4 space-y-2 font-body">
                  <li>✓ Browse all products</li>
                  <li>✓ Follow favorite vendors</li>
                  <li>✓ Save favorite products</li>
                  <li>✓ Track orders</li>
                  <li>✓ View order history</li>
                  <li>✓ Leave reviews</li>
                </ul>

                <button
                  type="button"
                  onClick={() => setSelectedPlan("free")}
                  className="mt-6 rounded-xl bg-primary-green px-6 py-3 font-semibold text-light-background
                  transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
                >
                  Select Free
                </button>
              </div>

              {/* Premium plan */}
              <div className="rounded-2xl border border-primary-dark p-6
              transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                <h2 className="font-heading text-3xl text-primary-dark">
                  Premium
                </h2>
                <p className="mt-2 font-body text-lg font-semibold text-primary-dark">
                    $5.99/month
                </p>

                <ul className="mt-4 space-y-2 font-body">
                  <li>✓ Everything in Free</li>
                  <li>✓ Early access to seasonal products</li>
                  <li>✓ New product alerts</li>
                  <li>✓ Exclusive member discounts</li>
                  <li>✓ Priority support</li>
                  <li>✓ Personalized recommendations</li>
                  <li>✓ Community event access</li>
                </ul>

                <button
                  type="button"
                  onClick={() => setSelectedPlan("premium")}
                  className="mt-6 rounded-xl bg-primary-green px-6 py-3 font-semibold text-light-background
                  transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
                >
                  Select Premium
                </button>
              </div>
            </div>
          </>
        )}

        {/* If a plan is selected, show the create account form */}
        {selectedPlan !== null && (
          <>
            <button
              type="button"
              onClick={() => setSelectedPlan(null)}
              className="mb-8 font-semibold text-primary-green
              transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]
               hover:text-primary-dark"
            >
              ← Back to plans
            </button>

            <h1 className="font-heading text-4xl text-primary-dark">
              Create {selectedPlan === "free" ? "Free" : "Premium"} Customer
              Account
            </h1>

            <form className="mt-8 grid max-w-xl gap-4">
              <input
                className="rounded-xl border border-primary-dark bg-light-background px-4 py-3"
                placeholder="Full Name"
              />

              <input
                type="email"
                className="rounded-xl border border-primary-dark bg-light-background px-4 py-3"
                placeholder="Email"
              />

              <input
                type="password"
                className="rounded-xl border border-primary-dark bg-light-background px-4 py-3"
                placeholder="Password"
              />

              <input
                type="password"
                className="rounded-xl border border-primary-dark bg-light-background px-4 py-3"
                placeholder="Confirm Password"
              />

              <button
                type="submit"
                className="mt-4 rounded-xl bg-primary-green px-6 py-3 font-semibold text-light-background
                transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
              >
                Create {selectedPlan === "free" ? "Free" : "Premium"} Account
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

export default CustomerAccount;