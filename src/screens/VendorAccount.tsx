import { useState } from "react";

function VendorAccount() {
  // This remembers which vendor plan was selected
  const [selectedPlan, setSelectedPlan] = useState<
    "free" | "pro" | "premium" | null
  >(null);

  return (
    <main className="bg-light-background text-primary-dark">
      <section className="mx-auto max-w-6xl px-6 py-16">

        {/* Plan selection view */}
        {selectedPlan === null && (
          <>
            <h1 className="font-heading text-4xl text-primary-green">
              Choose Your Vendor Plan
            </h1>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              
              {/* Free plan */}
              <div className="rounded-2xl border border-primary-green p-6">
                <h2 className="font-heading text-3xl text-primary-green">
                  Free
                </h2>

                <ul className="mt-4 space-y-2 font-body">
                  <li>✓ Create a vendor profile</li>
                  <li>✓ List starter products</li>
                  <li>✓ Receive customer orders</li>
                  <li>✓ Basic order tracking</li>
                  <li>✓ Customer reviews</li>
                </ul>

                <button
                  type="button"
                  onClick={() => setSelectedPlan("free")}
                  className="mt-6 rounded-xl bg-primary-green px-6 py-3 font-semibold text-light-background"
                >
                  Select Free
                </button>
              </div>

              {/* Pro plan */}
              <div className="rounded-2xl border border-primary-green p-6">
                <h2 className="font-heading text-3xl text-primary-green">
                  Pro
                </h2>
                <p className="mt-2 font-body text-lg font-semibold text-accent-gold">
                    $5.99/month
                </p>

                <ul className="mt-4 space-y-2 font-body">
                  <li>✓ Everything in Free</li>
                  <li>✓ More product listings</li>
                  <li>✓ Featured vendor placement</li>
                  <li>✓ Sales insights</li>
                  <li>✓ Product restock alerts</li>
                  <li>✓ Priority support</li>
                </ul>

                <button
                  type="button"
                  onClick={() => setSelectedPlan("pro")}
                  className="mt-6 rounded-xl bg-accent-gold px-6 py-3 font-semibold text-primary-dark"
                >
                  Select Pro
                </button>
              </div>

              {/* Premium plan */}
              <div className="rounded-2xl border border-primary-green p-6">
                <h2 className="font-heading text-3xl text-primary-green">
                  Premium
                </h2>
                <p className="mt-2 font-body text-lg font-semibold text-accent-gold">
                    $13.99/month
                </p>

                <ul className="mt-4 space-y-2 font-body">
                  <li>✓ Everything in Pro</li>
                  <li>✓ Top vendor placement</li>
                  <li>✓ Advanced sales analytics</li>
                  <li>✓ Marketing support</li>
                  <li>✓ Seasonal campaign features</li>
                  <li>✓ Early access to platform tools</li>
                </ul>

                <button
                  type="button"
                  onClick={() => setSelectedPlan("premium")}
                  className="mt-6 rounded-xl bg-primary-dark px-6 py-3 font-semibold text-light-background"
                >
                  Select Premium
                </button>
              </div>
            </div>
          </>
        )}

        {/* Signup form view */}
        {selectedPlan !== null && (
          <>
            <button
              type="button"
              onClick={() => setSelectedPlan(null)}
              className="mb-8 font-semibold text-primary-green"
            >
              ← Back to plans
            </button>

            <h1 className="font-heading text-4xl text-primary-green">
              Create{" "}
              {selectedPlan === "free"
                ? "Free"
                : selectedPlan === "pro"
                ? "Pro"
                : "Premium"}{" "}
              Vendor Account
            </h1>

            <form className="mt-8 grid max-w-xl gap-4">
              <input
                className="rounded-xl border border-primary-green bg-light-background px-4 py-3"
                placeholder="Business Name"
              />

              <input
                className="rounded-xl border border-primary-green bg-light-background px-4 py-3"
                placeholder="Contact Name"
              />

              <input
                type="email"
                className="rounded-xl border border-primary-green bg-light-background px-4 py-3"
                placeholder="Email"
              />

              <input
                type="password"
                className="rounded-xl border border-primary-green bg-light-background px-4 py-3"
                placeholder="Password"
              />

              <input
                type="password"
                className="rounded-xl border border-primary-green bg-light-background px-4 py-3"
                placeholder="Confirm Password"
              />

              <button
                type="submit"
                className="mt-4 rounded-xl bg-primary-green px-6 py-3 font-semibold text-light-background"
              >
                Create Vendor Account
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

export default VendorAccount;