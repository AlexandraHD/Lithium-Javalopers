const usr = localStorage.getItem("seller")
const user = JSON.parse(usr)
// Mostrar los detalles del usuario en el HTML
document.getElementById('nombre-usuario').textContent = user.nameUser;
document.getElementById('nombre-usuarioBienvenida').textContent = user.nameUser;
document.getElementById('direccion-usuario').textContent = user.addressUser;
document.getElementById('img-photoUser').src = user.imageUser;
document.getElementById('email-usuario').textContent = user.emailUser;
document.getElementById('telefono-usuario').textContent = user.phoneUser;