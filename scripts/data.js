const productos = [
  {
    id: 1,//algo unico
    titulo: "iPhone 12 Pro Max 256gb Grafito",
    imagen: "../img/imperdibles1.jpeg",
    alt: " Iphone max ",

    categoria: {
        nombre: "celulares",
        
    },
    precio:  2500000,
  },
  {
    id: 2,//algo unico
    titulo: "Laptop Asus Vivobook Pro 15 OLED quiet blue 15.6",
    imagen: "../img/imperdibles2.jpeg",
    alt: " Iphone max ",

    categoria: {
        nombre: "laptos",
        
    },
    precio:  2500000,
  },
  {
    id: 3,//algo unico
    titulo: "Televisor Samsung 55 Crystal Uhd 4k Cu8200",
    imagen: "../img/imperdibles3.jpeg",
    alt: " Iphone max ",

    categoria: {
        nombre: "televisores",
        
    },
    precio:  2500000,
  },
  {
    id: 4,//algo unico
    titulo: "Audífonos gamer Kotion Each G9000 black y blue con luz LED",
    imagen: "../img/imperdibles4.jpeg",
    alt: " Iphone max ",
    detalles : "la descricion",

    categoria: {
        nombre: "accesorios",
        
    },
    precio:  2500000,
  },
  {
    id: 5,//algo unico
    titulo: "Tablet Amazon Fire HD 10 2021 KFTRWI 10.1 32gb",
    imagen: "../img/TabletAmazon.jpg",
    alt: " Iphone max ",

    categoria: {
        nombre: "tablets",
        
    },
    precio:2500000,
  },
  {
    id: 6,//algo unico
    titulo: "Celular Samsung Galaxy M14 5g Azul Oscuro 6000 Mah",
    imagen: "../img/SamsungGalaxy.jpeg",
    alt: " Iphone max ",

    categoria: {
        nombre: "celulares",
        
    },
    precio:  2500000,
  },
  {
    id: 7,//algo unico
    titulo: "Todo En Uno Hp 21-b003la Celeron J4025",
    imagen: "../img/TodoEnUnoHp.jpeg",
    alt: " Iphone max ",

    categoria: {
        nombre: "computadores",
        
    },
    precio:  2500000,
  },
  {
    id: 8,//algo unico
    titulo: "Smart TV Samsung Series 6 QN60Q65BAKXZL QLED",
    imagen: "../img/SmartTVSamsung.jpeg",
    alt: " Iphone max ",

    categoria: {
        nombre: "televisores",
        
    },
    precio:  2500000,
  },
  {
    id: 9,//algo unico
    titulo: "Audífonos inalámbricos Lenovo X4 negro",
    imagen: "../img/AudífonosInalámbricos.jpeg",
    alt: " Iphone max ",

    categoria: {
        nombre: "accesorios",
        
    },
    precio: 2500000,
  },
  {
    id: 10,//algo unico
    titulo: "Apple iPad (9ª generación) 10.2 Wi-Fi 64GB - Gris",
    imagen: "../img/AppleiPad.jpg",
    alt: " Iphone max ",

    categoria: {
        nombre: "tablets",
        
    },
    precio:  2500000,
  },
  {
    id: 11,//algo unico
    titulo: "Huawei P30 Lite 128 GB midnight black 4 GB RAM",
    imagen: "../img/HuaweiP30.jpeg",
    alt: " Iphone max ",

    categoria: {
        nombre: "celulares",
        
    },
    precio: 2500000,
  },
  {
    id: 12,//algo unico
    titulo: "Ultrabook Lenovo IdeaPad 14IGL05 platinum gray 14",
    imagen: "../img/UltrabookLenovo.jpeg",
    alt: " Iphone max ",

    categoria: {
        nombre: "celulares",
        
    },
    precio:  2500000,
  },

]

//detalles del producto
function mostrarDetalles(productoId) {
  // Hacer una petición fetch para obtener los detalles del producto desde una API
  fetch(`https://ejemplo-api.com/productos/${productoId}`)
    .then(response => response.json())
    .then(producto => {
      // Mostrar los detalles del producto utilizando SweetAlert2
      Swal.fire({
        title: producto.nombre,
        html: `
          <p><strong>Precio:</strong> $${producto.precio}</p>
          <p><strong>Stock:</strong> ${producto.stock}</p>
        `,
        icon: 'info',
        confirmButtonText: 'Cerrar'
      });
    })
    .catch(error => {
      console.error('Error al obtener los detalles del producto:', error);
    });
}