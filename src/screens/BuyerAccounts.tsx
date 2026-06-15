function BuyerAccount() {
  return (
    <main className="bg-light-background text-primary-dark">
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h1 className="font-heading text-4xl text-primary-green">
          Create Buyer Account
        </h1>

        {/* Buyer form */}
        <form className="mt-8 grid max-w-xl gap-4">
          <input className="rounded-xl border border-primary-green bg-light-background px-4 py-3" placeholder="Full Name" />
          <input className="rounded-xl border border-primary-green bg-light-background px-4 py-3" placeholder="Email" type="email" />
          <input className="rounded-xl border border-primary-green bg-light-background px-4 py-3" placeholder="Password" type="password" />
          <input className="rounded-xl border border-primary-green bg-light-background px-4 py-3" placeholder="Confirm Password" type="password" />
        </form>

        {/* Buyer membership options */}
        <section className="mt-12">
          <h2 className="font-heading text-3xl text-primary-green">
            Choose Your Membership
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary-green p-6">
              <h3 className="font-heading text-2xl">Free Account</h3>
              <p className="mt-3">Shop 1-4 local products each month.</p>
              <button className="mt-5 rounded-xl bg-primary-green px-5 py-3 font-semibold text-light-background">
                Select Free
              </button>
            </div>

            <div className="rounded-2xl border border-primary-green p-6">
              <h3 className="font-heading text-2xl">Premium Account</h3>
              <p className="mt-3">Shop unlimited local products each month.</p>
              <button className="mt-5 rounded-xl bg-accent-gold px-5 py-3 font-semibold text-primary-dark">
                Select Premium
              </button>
            </div>
          </div>
        </section>

        <button className="mt-10 rounded-xl bg-primary-green px-6 py-3 font-semibold text-light-background">
          Create Buyer Account
        </button>
      </section>
    </main>
  );
}

export default BuyerAccount;