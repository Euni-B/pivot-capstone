import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import About from "./screens/About";
import Products from "./screens/Products";
import Account from "./screens/Account";
import ProductDetails from "./screens/ProductDetails";
import AOS from "aos";
import "aos/dist/aos.css";
 


function App() {
  // scroll animation library initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      </main>

      <Footer/>
    </div>
  );
}

export default App