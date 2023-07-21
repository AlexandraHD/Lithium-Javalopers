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
      // Aplica toLocaleString() al precio para formatearlo correctamente
      const precioFormateado = producto.price.toLocaleString('en-MX', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        useGrouping: true
    });
      productos_str = `
        <img src="${producto.imageProduct}" alt="${producto.alt}" class="img-item">
        <span class="titulo-item">${producto.nameProduct}</span><br>
        <h2 class = "price-product"><strong class="precio-item"> ${precioFormateado}</strong></h2>
        <button class="button-ver" data-product-id="${producto.idProduct}">Ver Producto</button>`;
      product_card.innerHTML = productos_str;
      products_container.append(product_card);
    });

    // Asociar evento de clic para mostrar el popup al hacer clic en el botón "Ver Producto"
  const dataVerProducto = document.querySelectorAll('.button-ver');
  console.log(dataVerProducto)
  dataVerProducto.forEach(button => {
      button.addEventListener('click', mostrarPopup);
  });
  }
  
  // llama a la función obtenerProductosPorCategoria() y pasa la categoría como argumento.
  // Aqui cojo el query param
  const urlParams = new URLSearchParams(window.location.search);
  const categoryName = urlParams.get('categoryName');
  console.log(categoryName)
  // aqui mando el query param para traer los datos de esa categoria
  obtenerProductosPorCategoria(categoryName);


  const mostrarPopup = async (event) => {
    const productId = event.target.getAttribute('data-product-id');
    try {
        const response = await fetch(`http://localhost:8080/product/buscarProduct/${productId}`);
        const producto = await response.json();
        // Aplica toLocaleString() al precio para formatearlo correctamente
        const precioFormateado = producto.price.toLocaleString('en-MX', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          useGrouping: true
      });

        // Aquí contenido del popup con la información detallada del producto
        const popupContent = `
            <div id="close-popup">
              <i class="fas fa-times"></i>
            </div>
        
            <div class="product-detail">
              <span class="titulo-item">${producto.nameProduct}</span><br>
              <h2 class = "price-product"><strong class="precio-item"> ${precioFormateado}</strong></h2>
              <p class="quantity-product">Disponibles: ${producto.quantity}</p>
              <p class="seller-product">Vendedor: ${producto.seller.nameSeller}</p><br>
              <p class="description-product" >Descripción: ${producto.description}</p>
              <button class="bproduct"><a href="/screens/carrito.html">Comprar</a></button>
            </div>
        `;
        const popup = document.querySelector('.popup-productDetail');
        popup.innerHTML = popupContent;
        popup.style.display = 'block';

        const selectElement = function(element) {
          return document.querySelector(element);
        }
        
 
        let x = document.getElementById('close-popup');
        console.log(x);
        x.addEventListener('click', function(){       
          console.log('Deberia funcionar')
          popup.style.display = 'none';
        });
        
    } catch (error) {
        console.error('Error al obtener el producto:', error);
    }
}



