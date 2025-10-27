import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { createOrder } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm(){
  const { cart, getTotalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    const buyer = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value
    };
    const order = {
      buyer,
      items: cart,
      total: getTotalPrice(),
      createdAt: new Date().toISOString()
    };
    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch(err){
      console.error(err);
      alert('Error creando la orden');
    } finally {
      setLoading(false);
    }
  }

  if (orderId) return (
    <div className="card">
      <h3>Gracias por tu compra</h3>
      <p>Tu id de orden es: <strong>{orderId}</strong></p>
      <button className="btn" onClick={() => navigate('/')}>Volver al inicio</button>
    </div>
  );

  if (cart.length === 0) return <div className="empty">Carrito vacío</div>;

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Checkout</h3>
      <div style={{display:'grid',gap:8}}>
        <input name="nombre" placeholder="Nombre" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="telefono" placeholder="Teléfono" required />
        <div style={{marginTop:8}}>
          <button className="btn" type="submit" disabled={loading}>{loading ? 'Procesando...' : 'Confirmar compra'}</button>
        </div>
      </div>
    </form>
  );
}
