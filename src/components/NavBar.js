import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar(){
  return (
    <header>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="brand">ProyectoFinal-Franco</Link>
          <div className="nav-links">
            <Link to="/">Todos</Link>
            <Link to="/category/electronica">Electrónica</Link>
            <Link to="/category/indumentaria">Indumentaria</Link>
          </div>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}
