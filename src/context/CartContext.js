import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart_v1');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart_v1', JSON.stringify(cart));
  }, [cart]);

  function addItem(item, quantity) {
    setCart(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) {
        return prev.map(p => p.id === item.id ? { ...p, quantity: Math.min(p.quantity + quantity, item.stock) } : p);
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  }

  function removeItem(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalItems() {
    return cart.reduce((s, it) => s + it.quantity, 0);
  }

  function getTotalPrice() {
    return cart.reduce((s, it) => s + (it.quantity * it.precio), 0);
  }

  const value = { cart, addItem, removeItem, clearCart, getTotalItems, getTotalPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
