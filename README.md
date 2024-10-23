# TP Integrador - Javascript, HTML y CSS

Este proyecto es un trabajo práctico integrador que utiliza **Javascript**, **HTML** y **CSS**. Implementa una tienda virtual que permite visualizar y gestionar productos. Los productos se almacenan en `localStorage` y se categorizan en diferentes grupos como hamburguesas, papas y gaseosas.

## Características

### Funcionalidades Principales
- **Visualización de Productos**: Los productos se cargan dinámicamente desde `localStorage` y se agrupan por categorías como Hamburguesas, Papas y Gaseosas.
- **Almacenamiento en LocalStorage**: Los productos se almacenan y recuperan desde el `localStorage` del navegador.
- **Interfaz de Usuario Dinámica**: Se puede agregar, modificar y eliminar productos a través de un modal emergente.
- **Filtros por Categoría**: Los productos se agrupan y muestran en función de su categoría.
- **Buscador de Productos**: Un campo de búsqueda permite filtrar los productos por nombre.
- **Diseño Responsivo**: La interfaz está adaptada para diferentes tamaños de pantalla usando CSS.

### Tecnologías Utilizadas
- **HTML**: Estructura del contenido.
- **CSS**: Diseño y estilo de la página, incluyendo responsividad y tipografía.
- **Javascript**: Manipulación del DOM, lógica de la tienda, manejo de eventos y almacenamiento de productos en `localStorage`.

## Estructura del Proyecto

### HTML
El archivo HTML (`index.html`) proporciona la estructura básica de la tienda, incluyendo:
- Un campo de búsqueda.
- Botones para agregar productos.
- Un contenedor donde se renderizan los productos agrupados por categorías.
- Un modal emergente que permite agregar o modificar productos.

### CSS
El archivo CSS (`style.css`) define los estilos de la tienda:
- **Diseño Responsivo**: Se utilizan `media queries` para hacer que el diseño se ajuste correctamente en dispositivos móviles y pantallas de escritorio.
- **Tipografía**: Utiliza la fuente `Rubik` desde Google Fonts.
- **Material Icons**: Incluye iconos de Material Design para mejorar la interfaz de usuario.

### Javascript
Los archivos de Javascript proporcionan toda la lógica para la tienda:
- **main.js**: Archivo principal que controla las interacciones con la página.
- **store.js**: Lógica para renderizar y mostrar productos en la tienda.
- **localstorage.js**: Funciones para manejar la persistencia de datos en `localStorage`.

#### Estructura del Código
1. **LocalStorage** (`localstorage.js`):  
   - `handleGetProductLocalStorage`: Recupera los productos almacenados en `localStorage`.
   - `setInLocalStorage`: Agrega o actualiza un producto en `localStorage`.
   
2. **Renderizado de Productos** (`store.js`):  
   - `handleGetProductsToStore`: Recupera los productos desde `localStorage` y los envía para ser renderizados en la página.
   - `handleRenderList`: Renderiza los productos agrupados por categorías en la interfaz.
   - `addEvents`: Agrega eventos de clic a los productos para que puedan ser modificados.

3. **Modal para Agregar/Modificar Productos**:
   - Se incluye un modal emergente que permite agregar nuevos productos o modificar los existentes.

## Requisitos Previos

- **Node.js** y **npm**: Asegúrate de tener instalados para poder ejecutar el entorno de desarrollo.
- **Vite**: Utilizado como servidor de desarrollo.

