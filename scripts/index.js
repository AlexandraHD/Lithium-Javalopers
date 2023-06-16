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