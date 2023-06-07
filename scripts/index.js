
const selectElement = function(element) {
    return document.querySelector(element);     //selecciona los elementos
}


let menuToggle = selectElement('.menu-toggle');     //Selecciona el menu
let body = selectElement('body');

menuToggle.addEventListener('click', function(){        //Abre el menu
    body.classList.toggle('open');
})