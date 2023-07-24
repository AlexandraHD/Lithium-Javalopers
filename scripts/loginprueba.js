const usr = localStorage.getItem("user")
const user = JSON.parse(usr)
// Mostrar los detalles del usuario en el HTML
document.getElementById('nombre-usuario').textContent = user.nameUser;
document.getElementById('direccion-usuario').textContent = user.addressUser;
document.getElementById('img-photoUser').src = user.imageUser;