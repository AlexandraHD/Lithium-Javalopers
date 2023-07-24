let products_container = document.querySelector('.discount');
let productos_str = '';

// Función para obtener los datos de los productos desde una API
const obtenerProductos = async () => {
  try {
    const response = await fetch('http://localhost:8080/product/crearProduct'); // Reemplaza 'URL_DE_LA_API' con la URL real de la API
    const data = await response.json();
    renderizarCatalogo(data);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
}

// Función para renderizar los productos del catálogo
const renderizarCatalogo = (array) => {
  array.forEach(producto => {
    const product_card = document.createElement('div');
    product_card.classList.add('product-container');
    productos_str = `
      <img src="${producto.imageProduct}" alt="${producto.alt}" class="img-item">
      <span class="titulo-item">${producto.nameProduct}</span><br>
      <h2 class = "price-product"><strong class="precio-item">$ ${producto.price}</strong></h2>
      <button class="button-ver"><a href="/screens/login.html">Ver Producto</a></button>`;
    product_card.innerHTML = productos_str;
    products_container.append(product_card);
  });
}
obtenerProductos();

