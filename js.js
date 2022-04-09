
const lista = document.querySelector(".card__QandA-list");
const sections = document.querySelectorAll(".card__qaa-container");
const preguntas = document.querySelectorAll(".card__question");
const caja = document.querySelector(".card__box");


let boxing = function(m){
   caja.style.left = "-30%";
}

let unboxing = function(){
    caja.style.left = "-19%";
}

let handleClick = function(e){
    if( e.target.className === '.card__question' || '.card__arrowDown'){ 
        const li = e.target.parentElement;
        li.classList.toggle("active");
    }
}

lista.addEventListener('click', handleClick);
     
preguntas.forEach(pregunta => {
        pregunta.addEventListener("mouseenter" , boxing)});

preguntas.forEach(pregunta => {
            pregunta.addEventListener("mouseleave" , unboxing)});

