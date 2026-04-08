import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext'; // ← Add import
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>  {/* ← Wrap App */}
      <App />
    </CartProvider>
  </React.StrictMode>
);