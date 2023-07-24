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

//detalle del producto
function mostrarDetalles(productoId) {
  // Aquí puedes realizar una llamada a la base de datos o una petición AJAX para obtener los detalles del producto correspondiente al productoId
  
  // Ejemplo de detalles del producto obtenidos de manera estática
  const detallesProducto = {
    1: {
      nombre: "iPhone 12 Pro Max 256gb Grafito",
      pantalla:  "Pantalla Super Retina XDR de 6.7 pulgadas con tecnología OLED",
      procesador: " Chip A14 Bionic, un procesador de alta potencia",
      almacenamiento: "256 GB de almacenamiento interno"
    },
    2: {
      nombre: "Laptop Asus Vivobook Pro 15 OLED quiet blue 15.6",
      pantalla:  "Pantalla OLED de 15.6 pulgadas.",
      procesador: "Procesador Intel Core o AMD Ryzen (última generación).",
      almacenamiento: "Almacenamiento SSD rápido y capacidad variable (256 GB, 512 GB o 1 TB)."
    },
    3: {
      nombre: "Televisor Samsung 55 Crystal Uhd 4k Cu8200",
      pantalla:  "Pantalla de 55 pulgadas.",
      procesador: "Crystal UHD 4K (3840 x 2160 píxeles)",
      almacenamiento: "Asistentes de voz integrados (Bixby, Alexa, Google Assistant)."
    },
    4:{
      nombre: "Audífonos gamer Kotion Each G9000 black y blue con luz LED",
      pantalla:  "Kotion Each G9000",
      procesador: "Control de volumen y micrófono en el cable",
      almacenamiento: "Almohadillas acolchadas para mayor comodidad"
    },
    5:{
      nombre: "Tablet Amazon Fire HD 10 2021 KFTRWI 10.1 32gb",
      pantalla:  "Resolución de pantalla 1920 x 1200 píxeles (Full HD).",
      procesador: "Almacenamiento interno de 32GB.",
      almacenamiento: "Sistema operativo: Fire OS (basado en Android)"
    },
    6:{
      nombre: "Celular Samsung Galaxy M14 5g Azul Oscuro 6000 Mah",
      pantalla:  "Tamaño y resolución de 6.5 pulgadas",
      procesador: "Cantidad de memoria RAM de 8GB",
      almacenamiento: "Tamaño de almacenamiento de 128GB"
    },
    7:{
      nombre: "Todo En Uno Hp 21-b003la Celeron J4025",
      pantalla:  "Tamaño y resolución específicos (p. ej., 21.5 pulgadas, Full HD)",
      procesador: "Intel Celeron J4025 (doble núcleo)",
      almacenamiento: "Tamaño del disco duro (por ejemplo, 1TB) o tipo de almacenamiento."
    },
    8:{
      nombre: "Smart TV Samsung Series 6 QN60Q65BAKXZL QLED",
      pantalla:  "Tamaño de 65 pulgadas",
      procesador: "Resolución de 4K Ultra HD (3840 x 2160 píxeles)",
      almacenamiento: "Smart TV: Acceso a aplicaciones y contenido en línea."
    },
    9:{
      nombre: "Audífonos inalámbricos Lenovo X4 negro",
      pantalla:  "Audífonos inalámbricos (TWS - True Wireless Stereo)",
      procesador: "Controles táctiles para reproducción de música y llamadas.",
      almacenamiento: "Duración de la batería (por ejemplo, X horas de reproducción)"
    },
    10:{
      nombre: "Apple iPad (9ª generación) 10.2 Wi-Fi 64GB - Gris",
      pantalla:  "Tamaño de pantalla de 10.2 pulgadas.",
      procesador: "Procesador Chip A13 Bionic",
      almacenamiento: "Almacenamiento de 64GB."
    },
    11:{
      nombre: "Huawei P30 Lite 128 GB midnight black 4 GB RAM",
      pantalla:  "Tamaño y resolución específicos de 6.15 pulgadas, Full HD+",
      procesador: "Almacenamiento interno de 128 GB",
      almacenamiento: "Lector de huellas dactilares y reconocimiento facial para desbloqueo."
      
    },
    12:{
      nombre: "Ultrabook Lenovo IdeaPad 14IGL05 platinum gray 14",
      pantalla:  "Tamaño de pantalla de 14 pulgadas.",
      procesador: "Procesador puede variar según la configuración (por ejemplo, Intel Core i5 o i7)",
      almacenamiento: "Tamaño del disco duro o tipo de almacenamiento (p. ej., SSD o HDD)."
    }

  };
  
  const producto = detallesProducto[productoId];
  
  // Mostrar los detalles del producto utilizando SweetAlert2
  Swal.fire({
    title: `<span class="custom-title">${producto.nombre}</span>`,
    html: `
      <div class = "div-swal">
      <p class = "screen">🛒${producto.pantalla}</p>
      <p class = "screen">🛒${producto.procesador}</p>
      <p class = "screen">🛒${producto.almacenamiento}</p>
      </div>
    `,
    icon: 'info',
    confirmButtonText: 'Cerrar',
    customClass: {
      confirmButton: 'btn-red', // Clase CSS para el botón "Cerrar"
      popup: 'border-red',// Clase CSS para el borde del SweetAlert
      titlle: 'title-swal',
      icon: 'icon-swal'
    }
    
  });
}