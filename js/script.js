//menu desplegable
const selectElement = function(element) {
	return document.querySelector(element);     //selecciona los elementos
}
let menuToggle = selectElement('.menu-toggle');     //Selecciona el menu
let body = selectElement('body');
menuToggle.addEventListener('click', function(){        //Abre el menu
	body.classList.toggle('open');
})

//funcion para la galeria de fotos 
function showFullscreenImage(img) {
	var fullscreenImage = document.getElementById('fullscreen-img');
	fullscreenImage.src = img.src;
	var fullscreenDiv = document.querySelector('.fullscreen-image');
	fullscreenDiv.style.display = 'flex';
}
function hideFullscreenImage() {
	var fullscreenDiv = document.querySelector('.fullscreen-image');
	fullscreenDiv.style.display = 'none';
}
//declaracion de variable para el incremento y decremento de la cantidad de productos
const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');

let valueByDefault = parseInt(inputQuantity.value);

// Funciones Click

btnIncrement.addEventListener('click', () => {
	valueByDefault += 1;
	inputQuantity.value = valueByDefault;
});

btnDecrement.addEventListener('click', () => {
	if (valueByDefault === 1) {
		return;
	}
	valueByDefault -= 1;
	inputQuantity.value = valueByDefault;
});

// Toggle
// Constantes Toggle Titles
const toggleDescription = document.querySelector(
	'.title-description'
);
const toggleAdditionalInformation = document.querySelector(
	'.title-additional-information'
);
const toggleReviews = document.querySelector('.title-reviews');

// Constantes Contenido Texto
const contentDescription = document.querySelector(
	'.text-description'
);
const contentAdditionalInformation = document.querySelector(
	'.text-additional-information'
);
const contentReviews = document.querySelector('.text-reviews');

// Funciones Toggle
toggleDescription.addEventListener('click', () => {
	contentDescription.classList.toggle('hidden');
});

toggleAdditionalInformation.addEventListener('click', () => {
	contentAdditionalInformation.classList.toggle('hidden');
});

toggleReviews.addEventListener('click', () => {
	contentReviews.classList.toggle('hidden');
});

//funcion expandir boton del footer
document.addEventListener('DOMContentLoaded', function() {
	const expandirBtn = document.querySelector('.expand-btn');
	const contenido = document.querySelector('.contents-footer');
  
	expandirBtn.addEventListener('click', function() {
	  contenido.classList.toggle('activo');
	});
});
