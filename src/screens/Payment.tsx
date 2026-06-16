import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  return (
    <main className="bg-light-background text-primary-dark">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-heading text-4xl text-primary-dark">
          Payment
        </h1>

        <form className="mt-8 grid gap-4">
          <input className="rounded-xl border border-primary-dark bg-light-background px-4 py-3" placeholder="Name on Card" />
          <input className="rounded-xl border border-primary-dark bg-light-background px-4 py-3" placeholder="Card Number" />
          <input className="rounded-xl border border-primary-dark bg-light-background px-4 py-3" placeholder="Expiration Date" />
          <input className="rounded-xl border border-primary-dark bg-light-background px-4 py-3" placeholder="CVV" />

          <button
            type="button"
            onClick={() => navigate("/order-confirmation")}
            className="mt-6 rounded-full bg-primary-green px-6 py-3 font-body font-semibold text-white"
          >
            Place Order
          </button>
        </form>
      </section>
    </main>
  );
}

export default Payment;