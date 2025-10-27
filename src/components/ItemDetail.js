import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';

export default function ItemDetail({ item }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd(qty){
    addItem(item, qty);
    setAdded(true);
  }

  if (!item) return <div className="empty">Cargando...</div>;

  return (
    <div className="card" style={{display:'flex',gap:16}}>
      <div style={{flex:'0 0 300px'}}>
        <div className="item-img">{item.imagen ? <img src={item.imagen} alt={item.nombre} /> : 'No image'}</div>
      </div>
      <div style={{flex:1}}>
        <h2>{item.nombre}</h2>
        <div className="small-muted">{item.categoria}</div>
        <p>{item.descripcion}</p>
        <div className="item-price">${item.precio}</div>
        {!added ? <ItemCount stock={item.stock} onAdd={handleAdd} /> : (
          <div style={{marginTop:12}}>
            <a href="/cart" className="btn">Ir al carrito</a>
          </div>
        )}
      </div>
    </div>
  );
}
