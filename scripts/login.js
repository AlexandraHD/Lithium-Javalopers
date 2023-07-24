const getUserByEmail = async (email) => {
  try {
      const response = await fetch(`http://localhost:8080/CrudRepo/getUserByEmail?email=${email}`);
      const user = await response.json();
      window.localStorage.setItem("user", JSON.stringify(user))
      window.location.href = `perfilpersona.html`;
  } catch (error) {
      console.error('Error al obtener los detalles del usuario:', error);
  }
}

// Evento de inicio de sesión (cuando el usuario hace clic en el botón "Iniciar Sesión")
const btnIniciarSesion = document.getElementById('submit-login');
btnIniciarSesion.addEventListener('click', (e) => {
    e.preventDefault(); // Previene el envío del formulario (ya que lo manejamos por AJAX)

    const correo = document.getElementById('email').value;
    getUserByEmail(correo); // Llamamos a la función para obtener los detalles del usuario por email
});