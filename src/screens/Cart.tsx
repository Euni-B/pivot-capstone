import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  // Calculates subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Estimated taxes
  const taxes = subtotal * 0.09;

  // Final total
  const total = subtotal + taxes;

  return (
    <main className="bg-light-background text-primary-dark">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-heading text-4xl text-primary-dark">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
            <p className="font-body text-lg">Your cart is currently empty.</p>

            <Link
              to="/products"
              className="mt-6 inline-block rounded-full bg-primary-green px-6 py-3 font-body font-semibold 
              text-white transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* Cart items */}
            <section className="space-y-6">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl bg-white p-6 shadow-sm"
                >
                  <h2 className="font-body text-xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-primary-dark/70">
                    Seller: {item.seller}
                  </p>

                  <p className="mt-3 font-bold text-primary-dark">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity controls */}
                  <div className="mt-5 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      className="rounded-full border border-primary-green px-4 py-2 font-semibold
                       text-primary-dark transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]
                        hover:text-primary-green"
                    >
                      -
                    </button>

                    <span className="font-body font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      className="rounded-full border border-primary-green px-4 py-2 font-semibold
                       text-primary-dark transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]
                        hover:text-primary-green"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="mt-5 font-body font-semibold text-primary-dark
                     transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]
                      hover:text-primary-green"
                  >
                    Remove
                  </button>
                </article>
              ))}
            </section>

            {/* Order summary */}
            <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="font-heading text-3xl text-primary-dark">
                Order Summary
              </h2>

              <div className="mt-6 space-y-3 font-body">
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Estimated Taxes: ${taxes.toFixed(2)}</p>

                <p className="border-t border-primary-dark/30 pt-4 text-xl font-bold">
                  Total: ${total.toFixed(2)}
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate("/checkout")}
                className="mt-6 w-full rounded-full bg-primary-green px-6 py-3 font-body font-semibold
                 text-white transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
              >
                Checkout
              </button>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cart;