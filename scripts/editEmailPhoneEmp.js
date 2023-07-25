const saveChangeEP = async (e) => {
    const newEmail = document.getElementById('new-email').value;
    const newPhone = document.getElementById('new-phone').value;
    const slr = localStorage.getItem("seller")
    const seller = JSON.parse(slr)
    seller.emailSeller = newEmail
    seller.phoneSeller = newPhone

    try {
        const response = await fetch(`http://localhost:8080/CrudRepo/modificarSeller`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', // Indicamos que estamos enviando datos en formato JSON
        },
        body: JSON.stringify(seller), // Convertimos los datos a formato JSON
        })
        
        const closePopupEP = document.getElementById('popup-emailPhoneEdit');
        closePopupEP.style.display = 'none';

        window.localStorage.setItem("seller", JSON.stringify(seller));

        Swal.fire({
            icon: 'success',
            title: 'Información actualizada con éxito!',
            showConfirmButton: false,
            timer: 1500
          }).then(function() {
            window.location = "perfilEmpresa.html";
          });
    } catch {

    }
    
}

const mostrarPopupEmailPhone = (event) => {
    const popupEmailPhone = document.getElementById('popup-emailPhoneEdit');
        console.log("click del lapiz")
        // Aquí contenido del popup con la información detallada del producto
        const popupContentEmailPhone = `
            <div id="close-popupEmailPhone" class="close-popup">
              <i class="fas fa-times"></i>
            </div>
        
            <div class="new-info">
              <label for="new-email" id="">Nuevo correo</label>
              <input type="text" id="new-email" value="${seller.emailSeller}">
            </div>
            <div class="new-info">
              <label for="new-phone" id="">Nuevo teléfono</label>
              <input type="text" id="new-phone" value="${seller.phoneSeller}">
            </div>
            <div class="bconfirm">
              <button class="confirm-change" id="confirm-newEP">confirmar</button>
            </div>
        `;
        popupEmailPhone.innerHTML = popupContentEmailPhone;
        popupEmailPhone.style.display = 'block';
        
 
        let x = document.getElementById('close-popupEmailPhone');
        console.log(x);
        x.addEventListener('click', function(){       
          console.log('Deberia funcionar')
          popupEmailPhone.style.display = 'none';
        });
        

    const confirmChangeEP = document.getElementById('confirm-newEP');
    console.log(confirmChangeEP);
    confirmChangeEP.addEventListener('click', saveChangeEP);
}

// Asociar evento de clic para mostrar el popup al hacer clic en el botón "Ver Producto"
const editEmailPhone = document.querySelectorAll('.button-email');
// console.log(dataVerProducto)
editEmailPhone.forEach(button => {
    button.addEventListener('click', mostrarPopupEmailPhone);
});
