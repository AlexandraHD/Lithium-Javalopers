
/* -------------------------------------------------------------------------- */
//^                funcion renderizar los productos del catalogo               */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
let products_container = document.querySelector('.discount');
let productos_str = ''
//funcion renderizar los productos del catalogo
const renderizarCatalogo = (array) => {
  array.forEach(producto => {
    const product_card = document.createElement('div')
    product_card.classList.add('product-container')
    productos_str = `
      <img src="${producto.imagen}" alt="${producto.alt}" class="img-item">
      <span class="titulo-item">${producto.titulo}</span>
      <strong class="precio-item">$ ${producto.precio}</strong>
      <button class="button-ver" onclick="mostrarDetalles(${producto.id})">Detalles</button>
      <button class="button-add" onclick='agregaraCarrito(${producto.id})' data-id="1">Comprar</button>
      
    `
    product_card.innerHTML = productos_str;
    products_container.append(product_card)
  });
}
renderizarCatalogo(productos)
/* -------------------------------------------------------------------------- */


/* ---------------------- mostrar y ocultar el carrito ---------------------- */

const hidden = (elemento) => {
  return elemento.classList.toggle('hidden')
}

// selecionas los elementos
let btn_carrito = document.querySelector('#header-carrito__btn');
const cart_products = document.querySelector('.container-carrito');

//creas el evento
btn_carrito.addEventListener("click", () => {
  hidden(cart_products)
  
});

/* -------------------------------------------------------------------------- */
function existeObjetoConID(array, id) {
  const objetosConID = array.filter(objeto => objeto.id === id);
  return objetosConID.length > 0;
}


let carritodeCompras = [];

const agregaraCarrito = (id) => {
  let producto = productos.find(producto => producto.id == id)

  if (existeObjetoConID(carritodeCompras, producto.id)) {
    console.log("Ya existe un objeto con el mismo ID");
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Este producto ya esta en tu carrito',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
  } else {
    carritodeCompras.push(producto);
    console.log("Objeto agregado correctamente");
    Swal.fire({
      title: 'Producto agregado al carrito',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  
    renderCarritoCompras();
    actualizarNumeroCarrito(carritodeCompras);
  
}

/* -------------------------------------------------------------------------- */
// renderizar la lista del carrito de compras

const container_carrito = document.querySelector('#products-id');

const renderCarritoCompras = () => {
  console.log(carritodeCompras);
  let card_carrito = ''

  carritodeCompras.forEach(producto => {
    
    
    card_carrito += `
    <div class="card-items">
    <div class="item">
      <img class="img-carrito" src="${producto.imagen}" alt="${producto.alt}">
      <div class="item-content">
        <span>${producto.titulo}</span>
        <strong class="cart-price">$${producto.precio}</strong><br>
        <button class="button-delete" onclick="eliminarProducto(${producto.id})">Eliminar</button>
      </div>
    </div>
  </div>
    
    `
  })
  container_carrito.innerHTML = card_carrito;

  renderTotalCarrito(carritodeCompras)
  
}



/* ------------------- numero del productos en el carrito ------------------ */

const numeroCarrito = document.querySelector('.count-product');
const actualizarNumeroCarrito = (carrito) => {
  let num = carrito.length;
  numeroCarrito.textContent = num;
}
/* -------------------------------------------------------------------------- */



/* ------------------------------- suma total ------------------------------- */
const sumarTotalCarrito = (arrayObjetos) => {
  let total = 0;
  arrayObjetos.forEach(element => {
    total += element.precio;
    
  })
  return total

  
}
console.log(sumarTotalCarrito(carritodeCompras));
 
const renderTotalCarrito = (arr) => {
  const totalTxt = document.querySelector('.carritoTotal__text');
  totalTxt.textContent = `$ ${sumarTotalCarrito(arr)}`
}

/* ------------------------------- finalizar compra ------------------------------- */
const finalizarCompra = () => {
  Swal.fire({
    //title: 'Finalizar compra',
    text: '¡Gracias por tu compra!',
    icon: 'success'
  });

  // Vacía el carrito de compras
  carritodeCompras = [];
  renderCarritoCompras();
  actualizarNumeroCarrito(carritodeCompras);

  // Oculta el botón de "Finalizar compra"
  const btnFinalizar = document.querySelector('#btn-finalizar-compra');
  btnFinalizar.classList.add('hidden');
};

const btnFinalizarCompra = document.querySelector('#btn-finalizar-compra');
btnFinalizarCompra.addEventListener('click', finalizarCompra);

/* ------------------------------- eliminar producto ------------------------------- */

const eliminarProducto = (id) => {
  carritodeCompras = carritodeCompras.filter(producto => producto.id !== id);
  renderCarritoCompras();
  actualizarNumeroCarrito(carritodeCompras);
};