import React, { useState } from 'react';

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial);

  function inc(){
    setQty(q => Math.min(q + 1, stock));
  }
  function dec(){
    setQty(q => Math.max(q - 1, 1));
  }
  return (
    <div>
      <div className="counter">
        <button className="btn secondary" onClick={dec} disabled={qty<=1}>-</button>
        <div>{qty}</div>
        <button className="btn" onClick={inc} disabled={qty>=stock}>+</button>
      </div>
      <div style={{marginTop:8}}>
        <button className="btn" onClick={() => onAdd(qty)} disabled={stock<=0}>Agregar al carrito</button>
      </div>
      {stock<=0 && <div className="small-muted">Producto sin stock</div>}
    </div>
  );
}
