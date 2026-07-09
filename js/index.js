/* =================================
   CARRUSEL
================================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const carrusel = document.querySelector(".carrusel");

let actual = 0;
let intervalo;

/* Mostrar slide */

function mostrarSlide(indice){

    slides.forEach(slide => {

        slide.classList.remove("active");

        if(slide.tagName === "VIDEO"){
            slide.pause();
        }

    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[indice].classList.add("active");
    dots[indice].classList.add("active");

    if(slides[indice].tagName === "VIDEO"){
        slides[indice].play();
    }

    actual = indice;
}

/* Siguiente slide */

function siguienteSlide(){

    let siguiente = actual + 1;

    if(siguiente >= slides.length){
        siguiente = 0;
    }

    mostrarSlide(siguiente);
}

/* Iniciar al poner cursor */

if(carrusel){

    carrusel.addEventListener("mouseenter", () => {

        intervalo = setInterval(siguienteSlide, 2500);

    });

    carrusel.addEventListener("mouseleave", () => {

        clearInterval(intervalo);

    });

}

/* Click en puntos */

dots.forEach(dot => {

    dot.addEventListener("click", () => {

        mostrarSlide(Number(dot.dataset.slide));

    });

});

/* =================================
   FUNCIONES ANTIGUAS
================================= */

function mostrarProducto(){

    const producto = document.getElementById("producto");

    if(producto){

        producto.scrollIntoView({
            behavior:"smooth"
        });

    }

}

function carritoTemporal(){

    alert("Carrito próximamente disponible");

}
function toggleMenu(){

    const menu =
    document.getElementById("menuDropdown");

    if(menu.style.display === "block"){

        menu.style.display = "none";

    }else{

        menu.style.display = "block";

    }
}

function toggleSubmenu(event){

    event.preventDefault();

    const submenu =
    document.getElementById("submenuCatalogo");

    if(submenu.style.display === "block"){

        submenu.style.display = "none";

    }else{

        submenu.style.display = "block";

    }
}