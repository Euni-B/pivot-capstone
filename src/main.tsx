import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import './index.css'
import App from './App.tsx'




// tells where and what to render 
createRoot(document.getElementById('root')!).render(
  // helps find mistakes in code 
  <StrictMode>
    {/* navigates amongst different pages  */}
    <BrowserRouter>
  
    <CartProvider>
      <AuthProvider>
          {/* component that contains everything to render       */}
      <App />
      </AuthProvider>
    </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
