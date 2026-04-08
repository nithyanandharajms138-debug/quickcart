
import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartSidebar.css';

function CartSidebar() {
  const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={toggleCart} className="close-btn">✕</button>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>🗑️</button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;