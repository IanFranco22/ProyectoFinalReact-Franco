import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc, addDoc, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Helpers
export async function getProducts() {
  const col = collection(db, 'productos');
  const snapshot = await getDocs(col);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getProductsByCategory(categoryId) {
  const col = collection(db, 'productos');
  const q = query(col, where('categoria', '==', categoryId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getProductById(id) {
  const d = doc(db, 'productos', id);
  const snap = await getDoc(d);
  if (!snap.exists()) throw new Error('Producto no encontrado');
  return { id: snap.id, ...snap.data() };
}

export async function createOrder(order) {
  const col = collection(db, 'ordenes');
  const docRef = await addDoc(col, order);
  return docRef.id;
}
export default db;
