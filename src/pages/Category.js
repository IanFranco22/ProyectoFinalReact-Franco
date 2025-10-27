import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../firebase/config';
import ItemList from '../components/ItemList';

export default function Category(){
  const { categoryId } = useParams();
  const [items, setItems] = useState(null);

  useEffect(() => {
    getProductsByCategory(categoryId).then(setItems).catch(err => { console.error(err); setItems([]); });
  }, [categoryId]);

  return (
    <div>
      <h1>Categoria: {categoryId}</h1>
      <ItemList items={items || []} />
    </div>
  );
}
