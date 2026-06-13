import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";



// tells where and what to render 
createRoot(document.getElementById('root')!).render(
  // helps find mistakes in code 
  <StrictMode>
    {/* navigates amongst different pages  */}
    <BrowserRouter>
    {/* component that contains everything to render       */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
