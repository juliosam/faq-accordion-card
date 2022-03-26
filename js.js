
const sections = document.querySelectorAll(".card__qaa-container")
const preguntas = document.querySelectorAll(".card__question");
const respuestas = document.querySelectorAll(".card__answer");
const flecha = document.querySelector(".card__arrowDown");
const caja = document.querySelector(".card__box");

let maxHchanger = function(a){

    a.classList.toggle("active");

}

let boxing = function(m){
    console.log(m)

    caja.style.left = "-30%";
}

let unboxing = function(){
    caja.style.left = "-19%";
}


sections.forEach(section => {
     section.addEventListener("click" , ()=>{section.classList.toggle("active")})})
     
preguntas.forEach(pregunta => {
        pregunta.addEventListener("mouseenter" , boxing)});

preguntas.forEach(pregunta => {
            pregunta.addEventListener("mouseleave" , unboxing)});


//keys.forEach(key => key.addEventListener("transitionend", transformback));