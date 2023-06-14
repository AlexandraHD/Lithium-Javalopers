const selectElement = function(element) {
    return document.querySelector(element);     //selecciona los elementos
}


let menuToggle = selectElement('.menu-toggle');     //Selecciona el menu
let body = selectElement('body');

menuToggle.addEventListener('click', function(){        //Abre el menu
    body.classList.toggle('open');
})

const signupForm = document.querySelector('.signup-form')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    //Referenciar los datos
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const passwordConf = document.querySelector('#password-confirm').value

    //Trae los datos almacenados del arreglo que se nombra (users)
    //Nos convierte los datos en JSON en el localstorage
    const Users = JSON.parse(localStorage.getItem('users')) || []

    //la función find() nos ayuda a buscar los datos almacenados
    //Nos comprueba si el correo que se ingresa es igual al que esta guardado en el localstorage
    const isUserRegistered = Users.find(user => user.email === email)

    //Realizaremos una comprobación
    if(isUserRegistered) {
        // return alert('El usuario ya esta registrado! , intentalo con otro')
        return Swal.fire({
            title: 'El usuario ya esta registrado! , intentalo con otro' ,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }else
    if(password != passwordConf) {
        // return alert('El usuario ya esta registrado! , intentalo con otro')
        return Swal.fire({
            title: 'Las contraseñas no coinciden' ,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }else{
    //Agregaremos los datos al objeto
    Users.push({name: name, email: email, password: password, passwordConf: password-confirm})
    localStorage.setItem('users', JSON.stringify(Users))

    Swal.fire({
        title: `Usuario ${name}, registrado exitosamente`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }).then((result) => {window.location.href = 'login.html'})}
    
})