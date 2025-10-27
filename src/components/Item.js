import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
  return (
    <div className="card">
      <div className="item-img">
        {item.imagen ? <img src={item.imagen} alt={item.nombre} /> : <div>No image</div>}
      </div>
      <div className="item-title">{item.nombre}</div>
      <div className="small-muted">{item.categoria}</div>
      <div className="item-price">${item.precio}</div>
      <Link to={`/item/${item.id}`} className="btn">Ver detalle</Link>
    </div>
  );
}
