const selectElement = function (element) {
  return document.querySelector(element);     //selecciona los elementos
}


let menuToggle = selectElement('.menu-toggle');     //Selecciona el menu
let body = selectElement('body');

menuToggle.addEventListener('click', function () {        //Abre el menu
  body.classList.toggle('open');
})

const signupForm = document.querySelector('.signup-form')

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

    //Referenciar los datos
    const name = document.querySelector('#name').value
    const actividadEconomica = document.querySelector('#act-econo').value
    const email = document.querySelector('#email').value
    const telefono = document.querySelector('#telefono').value
    const direccion = document.querySelector('#direccion').value
    const imagen = document.querySelector('#imagenProducto').value
    const password = document.querySelector('#password').value
    //const passwordConf = document.querySelector('#password-confirm').value

    const url = 'http://localhost:8080/CrudRepo/crearSeller';
    let data ={
      nameSeller: name,
      activitySeller: actividadEconomica,
      addressSeller: direccion,
      emailSeller:email,
      phoneSeller: telefono,
      passwordSeller: password,
      imageSeller:imagen
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
