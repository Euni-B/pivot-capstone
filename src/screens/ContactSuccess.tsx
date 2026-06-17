import { Link } from "react-router-dom";

function ContactSuccess() {
  return (
    <main className="bg-light-background text-primary-dark">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">

        <h1 className="font-heading text-5xl text-primary-dark">
          Message Sent
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-lg">
          Thank you for contacting NeighborGoods. We've received your message
          and will get back to you as soon as possible.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="rounded-xl border border-primary-dark px-8 py-3 font-body font-semibold text-primary-dark transition-all duration-300 hover:bg-primary-green hover:text-light-background"
          >
            Return Home
          </Link>

          <Link
            to="/products"
            className="rounded-xl border border-primary-dark px-8 py-3 font-body font-semibold text-primary-dark transition-all duration-300 hover:bg-primary-green hover:text-light-background"
          >
            Browse Marketplace
          </Link>

        </div>
      </section>
    </main>
  );
}

export default ContactSuccess;