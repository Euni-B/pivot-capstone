import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  return (
    <main className="bg-light-background text-primary-dark">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-heading text-4xl text-primary-dark">
          Checkout
        </h1>

        <form className="mt-8 grid gap-4">
          <input className="rounded-xl border border-primary-dark bg-light-background px-4 py-3" placeholder="Full Name" />
          <input className="rounded-xl border border-primary-dark bg-light-background px-4 py-3" placeholder="Email" type="email" />
          <input className="rounded-xl border border-primary-dark bg-light-background px-4 py-3" placeholder="Address" />
          <input className="rounded-xl border border-primary-dark bg-light-background px-4 py-3" placeholder="City" />
          <input className="rounded-xl border border-primary-dark bg-light-background px-4 py-3" placeholder="State" />
          <input className="rounded-xl border border-primary-dark bg-light-background px-4 py-3" placeholder="ZIP Code" />

          <button
            type="button"
            onClick={() => navigate("/payment")}
            className="mt-6 rounded-full bg-primary-green px-6 py-3 font-body font-semibold text-white
            transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] hover:bg-primary-dark"
          >
            Continue to Payment
          </button>
        </form>
      </section>
    </main>
  );
}

export default Checkout;