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
                title: 'Número de pedido correcto',
                iconColor: 'red',
                showConfirmButton: false,
                timer: 2000
                //le colocamos la promesa then para que cada vez que se inicie sesion se rideccione a un cierto contenido
            })
           
        } else {
            Swal.fire({
                icon: 'error',
                iconColor:'red',
                title: 'Oops, error de número de pedido',
                showConfirmButtonText: 'Aceptar',
                confirmButtonColor: 'red'
            })
        }
        document.getElementById('send').value = '';
    });
  }