import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './Data/ProductContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Data/CartContext.jsx'
import { LoginProvider } from './Data/LoginContext.jsx'


createRoot(document.getElementById('root')).render(
  <LoginProvider>
  <CartProvider>
<ProductProvider>
  <StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
  </ProductProvider>
  </CartProvider>
  </LoginProvider>
)
