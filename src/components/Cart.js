import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeItem, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) return <div className="empty">Carrito vacío. <Link to="/">Ir al catálogo</Link></div>;

  return (
    <div>
      {cart.map(it => (
        <div key={it.id} className="card" style={{display:'flex',alignItems:'center',gap:12,marginBottom:8}}>
          <div style={{width:80}}><div className="item-img">{it.imagen ? <img src={it.imagen} alt={it.nombre} /> : 'No image'}</div></div>
          <div style={{flex:1}}>
            <div className="item-title">{it.nombre}</div>
            <div className="small-muted">Cantidad: {it.quantity}</div>
            <div className="item-price">${it.precio} c/u</div>
          </div>
          <div>
            <button className="btn secondary" onClick={() => removeItem(it.id)}>Eliminar</button>
          </div>
        </div>
      ))}
      <div className="checkout-summary">
        <div>Total: ${getTotalPrice()}</div>
        <div style={{marginTop:8}}>
          <Link to="/checkout" className="btn">Finalizar compra</Link>
          <button className="btn secondary" style={{marginLeft:8}} onClick={clearCart}>Vaciar carrito</button>
        </div>
      </div>
    </div>
  );
}
