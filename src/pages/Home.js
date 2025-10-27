import React, { useEffect, useState } from 'react';
import { getProducts } from '../firebase/config';
import ItemList from '../components/ItemList';

export default function Home(){
  const [items, setItems] = useState(null);

  useEffect(() => {
    getProducts().then(setItems).catch(err => { console.error(err); setItems([]); });
  }, []);

  return (
    <div>
      <h1>Catálogo</h1>
      <ItemList items={items || []} />
    </div>
  );
}
