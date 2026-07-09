function toggleMenu(){

    document
    .getElementById("menuDropdown")
    .classList.toggle("activo");

}

function toggleSubmenu(event){

    event.preventDefault();

    document
    .querySelector(".submenu-items")
    .classList.toggle("activo");

}

/* TOUCH MÓVILES */

const productos =
document.querySelectorAll(".producto");

productos.forEach(producto=>{

    producto.addEventListener("touchstart",()=>{

        producto.classList.toggle("activo");

    });

});