import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="text-5xl font-bold text-blue-500">
      Tailwind is working! Hey Love!!
    </div>
  )
}

export default App