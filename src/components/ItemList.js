import React from 'react';
import Item from './Item';

export default function ItemList({ items }) {
  if (!items) return <div className="empty">Cargando...</div>;
  if (items.length === 0) return <div className="empty">No hay productos.</div>;
  return (
    <div className="grid">
      {items.map(it => <Item key={it.id} item={it} />)}
    </div>
  );
}
