const saveChangeAddress = async (e) => {
    const newAddress = document.getElementById('new-address').value;
    const usr = localStorage.getItem("user")
    const user = JSON.parse(usr)
    user.addressUser = newAddress

    try {
        const response = await fetch(`http://localhost:8080/CrudRepo/modificarUser`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', // Indicamos que estamos enviando datos en formato JSON
        },
        body: JSON.stringify(user), // Convertimos los datos a formato JSON
        })
        
        const closePopupAddress = document.getElementById('popup-addressEdit');
        closePopupAddress.style.display = 'none';

        window.localStorage.setItem("user", JSON.stringify(user));

        Swal.fire({
            icon: 'success',
            title: 'Dirección actualizada con éxito!',
            showConfirmButton: false,
            timer: 1500
          }).then(function() {
            window.location = "perfilpersona.html";
          });
    } catch {

    }
    
}

const mostrarPopupAddress = (event) => {
    const popupAddress = document.getElementById('popup-addressEdit');
        console.log("click del lapiz")
        // Aquí contenido del popup con la información detallada del producto
        const popupContentAddress = `
            <div id="close-popupAddress" class="close-popup">
              <i class="fas fa-times"></i>
            </div>
        
            <div class="new-info">
              <label for="new-address" id="">Nueva dirección</label>
              <input type="text" id="new-address">
            </div>
            <div class="bconfirm">
              <button class="confirm-change" id="confirm-address">confirmar</button>
            </div>
        `;
        popupAddress.innerHTML = popupContentAddress;
        popupAddress.style.display = 'block';
        
 
        let x = document.getElementById('close-popupAddress');
        console.log(x);
        x.addEventListener('click', function(){       
          console.log('Deberia funcionar')
          popupAddress.style.display = 'none';
        });
        

    const confirmChangeAddress = document.getElementById('confirm-address');
    console.log(confirmChangeAddress);
    confirmChangeAddress.addEventListener('click', saveChangeAddress);
}

// Asociar evento de clic para mostrar el popup al hacer clic en el botón "Ver Producto"
const editAddress = document.querySelectorAll('.button-dir');
// console.log(dataVerProducto)
editAddress.forEach(button => {
    button.addEventListener('click', mostrarPopupAddress);
});
