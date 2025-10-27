import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../firebase/config';
import ItemDetail from '../components/ItemDetail';

export default function Detail(){
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(id).then(setItem).catch(err => { console.error(err); setItem(null); });
  }, [id]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
}
