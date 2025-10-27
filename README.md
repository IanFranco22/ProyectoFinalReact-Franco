# ProyectoFinal-Franco

Aplicación single-page (front-end) de e-commerce creada para la entrega final del curso.
Incluye React, React Router, Context para carrito y conexión preparada a Firebase Firestore.

## Cómo usar

1. Clonar o descomprimir el proyecto.
2. Crear un proyecto en Firebase y copiar las credenciales en un archivo `.env` (basado en `.env.ejemplo`).
3. Ejecutar:
```bash
npm install
npm start
```

## Estructura principal

- `src/` - código fuente
  - `components/` - componentes reutilizables (NavBar, Item, ItemList, ItemDetail, ItemCount, CartWidget...)
  - `context/CartContext.js` - estado global del carrito
  - `firebase/config.js` - inicialización y helpers para Firestore
  - `pages/` - vistas (Home, Category, Detail, Cart, Checkout)
  - `css/` - estilos básicos

El proyecto está preparado para crear una colección `productos` en Firestore con documentos que contengan:
`nombre`, `descripcion`, `precio`, `categoria`, `imagen`, `stock`.

Al confirmar una compra, se crea un documento en la colección `ordenes` con los detalles de la compra.
