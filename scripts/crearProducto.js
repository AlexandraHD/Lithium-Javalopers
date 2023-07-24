const selectElement = function(element) {
    return document.querySelector(element);     //selecciona los elementos
}


let menuToggle = selectElement('.menu-toggle');     //Selecciona el menu
let body = selectElement('body');

menuToggle.addEventListener('click', function(){        //Abre el menu
    body.classList.toggle('open');
})

//formularios
const signupForm = document.querySelector('.signup-form')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    //Referenciar los datos
    const name = document.querySelector('#name').value
    const categoria = document.querySelector('#categoria').value
    const precio = document.querySelector('#precio').value
    const cantidad = document.querySelector('#cantidad').value
    const descripcion = document.querySelector('#descripcion').value
    const imagen = document.querySelector('#imagenProducto').value
    const vendedor = document.querySelector('#vendedor').value

    const url = 'http://localhost:8080/product/crearProduct';
    let data ={
      nameProduct: name,
      category: categoria,
      price: precio,
      quantity:cantidad,
      description: descripcion,
      imageProduct: imagen,
      seller: {
        idSeller: vendedor
    }
  }
  let fetchData ={
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json',}
}

// Realizar la solicitud fetch al servidor
fetch(url, fetchData)
.then(response => response.json())
.then(data => {
    console.log('Datos guardados con éxito:', data);
    // Aquí puedes hacer lo que necesites con la respuesta del servidor (si aplica)
  })
  .catch(error => {
    console.error('Error al guardar los datos:', error);
    // Manejar el error (si aplica)
  });
});  