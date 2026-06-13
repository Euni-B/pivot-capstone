import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
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
 
    <>
      {/* Global Header */}
      <Header />

      {/* Screens to show based on url/route*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App