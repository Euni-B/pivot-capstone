import { Link } from "react-router-dom";

function OrderConfirmation() {
  return (
    <main className="bg-light-background text-primary-dark">
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">

        <h1 className="font-heading text-5xl text-primary-green">
          Order Confirmed!
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-lg">
          Thank you for supporting local businesses through NeighborGoods.
          Your order has been received and is being prepared by your vendors.
        </p>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-heading text-3xl text-primary-green">
            What's Next?
          </h2>

          <ul className="mt-6 space-y-3 font-body text-left">
            <li>✓ Vendors will receive your order.</li>
            <li>✓ You'll receive email updates.</li>
            <li>✓ Order status will appear in your account.</li>
            <li>✓ Delivery or pickup details will be sent soon.</li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/products"
            className="rounded-full bg-primary-green px-8 py-3 font-body font-semibold text-white"
          >
            Continue Shopping
          </Link>

          <Link
            to="/account/customer"
            className="rounded-full border border-primary-green px-8 py-3 font-body font-semibold text-primary-green"
          >
            View Account
          </Link>
        </div>

      </section>
    </main>
  );
}

export default OrderConfirmation;