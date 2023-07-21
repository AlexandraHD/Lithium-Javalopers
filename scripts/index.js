//funcionalidad del banner
let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}
//funcionalidad para el despliegue de Nosotros en el footer
const accordion = document.getElementsByClassName('container2');
    for (i=0; i<accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.classList.toggle('active')
        })
    }

//Funcionalidad menu desplegable
const selectElement = function(element) {
    return document.querySelector(element);     //selecciona los elementos
}

let menuToggle = selectElement('.menu-toggle');     //Selecciona el menu
let x = selectElement('.fa-times');
let bars = selectElement('.fa-bars');
let navList = selectElement('.nav-list');


menuToggle.addEventListener('click', function(){        //Abre el menu
    navList.classList.toggle('open');
    x.classList.toggle('open');
    bars.classList.toggle('open')
})

let menuToggle2 = selectElement('.menu-toggle2');     //Selecciona el menu
let navList2 = selectElement('.nav-list2');
let profile = selectElement('.fa-circle-user')
menuToggle2.addEventListener('click', function(){
    console.log('Deberia funcionar')  
    x.classList.toggle('open');
    profile.classList.toggle('open');      //Abre el menu
    navList2.classList.toggle('open');
});

function goToCategory(category) {
    const url = '/screens/catalogo.html?categoryName=' + encodeURIComponent(category)
    window.location.href = url
}