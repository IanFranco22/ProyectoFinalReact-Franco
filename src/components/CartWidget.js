import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartWidget(){
  const { getTotalItems } = useCart();
  const total = getTotalItems();
  return (
    <Link to="/cart" className="cart-widget">
      <span>🛒</span>
      <span>{total}</span>
    </Link>
  );
}
