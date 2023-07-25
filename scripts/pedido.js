function verificarPedido() {
    // Obtener el número de pedido ingresado por el usuario
    let numeroPedido = document.getElementById('send').value;
    // Verificar si el número de pedido coincide con el pedido actual
    // Aquí asumimos que el número de pedido actual es "12345"
    const followOrder = document.getElementById('orderForm');

    followOrder.addEventListener("submit",function(event){

        event.preventDefault();

        if(numeroPedido === '6666'){
            Swal.fire({
                icon: 'success',
                title: `<span class="custom-title">'Número de pedido correcto</span>`,
                showConfirmButton: false,
                timer: 2000,
                iconColor: 'red',
                customClass: {
                    popup: 'border-red',// Clase CSS para el borde del SweetAlert
                    titlle: 'title-swal',
                    icon: 'icon-swal'
                }
                //le colocamos la promesa then para que cada vez que se inicie sesion se rideccione a un cierto contenido
            })
           
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops, error de número de pedido',
                showConfirmButtonText: 'Aceptar',
                confirmButtonColor: 'cerrar',
                customClass: {
                    confirmButton: 'btn-red',
                    popup: 'border-red',// Clase CSS para el borde del SweetAlert
                    titlle: 'title-swal',
                    icon: 'icon-swal'
                }
            })
        }
        document.getElementById('send').value = '';
    });
  }