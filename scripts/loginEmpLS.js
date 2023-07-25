const slr = localStorage.getItem("seller")
const seller = JSON.parse(slr)
console.log(seller);
// Mostrar los detalles del usuario en el HTML
document.getElementById('nombre-usuario').textContent = seller.nameSeller;
document.getElementById('nombre-usuarioBienvenida').textContent = "Bienvenido " + seller.nameSeller;
document.getElementById('direccion-usuario').textContent = seller.addressSeller;
document.getElementById('img-photoUser').src = seller.imageSeller;
document.getElementById('email-usuario').textContent = seller.emailSeller;
document.getElementById('telefono-usuario').textContent = seller.phoneSeller;