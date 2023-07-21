let products_container = document.querySelector('.discount');
let productos_str = '';

const obtenerProductosPorCategoria = async (category) => {
    try {
      const response = await fetch(`http://localhost:8080/product/getProductByCategory/${category}`);
      const data = await response.json();
      renderizarCatalogo(data);
      console.log('Renderizando catálogo');
    } catch (error) {
      console.error('Error al obtener los productos por categoría:', error);
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
  
  // llama a la función obtenerProductosPorCategoria() y pasa la categoría como argumento.
  // Aqui cojo el query param
  const urlParams = new URLSearchParams(window.location.search);
  const categoryName = urlParams.get('categoryName');
  console.log(categoryName)
  // aqui mando el query param para traer los datos de esa categoria
  obtenerProductosPorCategoria(categoryName);