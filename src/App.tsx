import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import About from "./screens/About";
import Products from "./screens/Products";
import Account from "./screens/Account";
import ProductDetails from "./screens/ProductDetails";
import Contact from "./screens/Contact";
import BuyerAccount from "./screens/CustomerAccount";
import VendorAccount from "./screens/VendorAccount";
import Checkout from "./screens/Checkout";
import Payment from "./screens/Payment";
import Cart from "./screens/Cart";
import ContactSuccess from "./screens/ContactSuccess";
import AOS from "aos";
import "aos/dist/aos.css";
import OrderConfirmation from './screens/OrderConfirmation';




function App() {
  // scroll animation library initialization
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (

    <div className="flex min-h-screen flex-col">
      {/* Global Header */}
      <Header />

      {/* Screens to show based on url/route*/}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/customer" element={<BuyerAccount />} />
          <Route path="/account/vendor" element={<VendorAccount />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/contact-success" element={<ContactSuccess />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App