const saveChangePhoto = async (e) => {
    const newPhoto = document.getElementById('new-photo').value;
    const usr = localStorage.getItem("user")
    const user = JSON.parse(usr)
    user.imageUser = newPhoto

    try {
        const response = await fetch(`http://localhost:8080/CrudRepo/modificarUser`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', // Indicamos que estamos enviando datos en formato JSON
        },
        body: JSON.stringify(user), // Convertimos los datos a formato JSON
        })
        
        const closePopupPhoto = document.getElementById('popup-photoEdit');
        closePopupPhoto.style.display = 'none';

        window.localStorage.setItem("user", JSON.stringify(user));

        Swal.fire({
            icon: 'success',
            title: 'Foto actualizada con éxito!',
            showConfirmButton: false,
            timer: 1500
          }).then(function() {
            window.location = "perfilpersona.html";
          });
    } catch {

    }
    
}

const showPopupPhoto = (event) => {
    const popupPhoto = document.getElementById('popup-photoEdit');
        console.log("click del lapiz")
        // Aquí contenido del popup con la información detallada del producto
        const popupContentPhoto = `
            <div id="close-popupPhoto" class="close-popup">
              <i class="fas fa-times"></i>
            </div>
        
            <div class="new-info">
              <label for="new-photo" id="">Nueva foto de perfil</label>
              <input type="text" id="new-photo" placeholder="URL">
            </div>
            <div class="bconfirm">
              <button class="confirm-change" id="confirm-photo">confirmar</button>
            </div>
        `;
        popupPhoto.innerHTML = popupContentPhoto;
        popupPhoto.style.display = 'block';
        
 
        let x = document.getElementById('close-popupPhoto');
        console.log(x);
        x.addEventListener('click', function(){       
          console.log('Deberia funcionar')
          popupPhoto.style.display = 'none';
        });
        

    const confirmChangePhoto = document.getElementById('confirm-photo');
    console.log(confirmChangePhoto);
    confirmChangePhoto.addEventListener('click', saveChangePhoto);
}

// Asociar evento de clic para mostrar el popup al hacer clic en el botón "Ver Producto"
const editPhoto = document.querySelectorAll('.button-photo');
// console.log(dataVerProducto)
editPhoto.forEach(button => {
    button.addEventListener('click', showPopupPhoto);
});
