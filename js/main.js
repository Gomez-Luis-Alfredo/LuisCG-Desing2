

let unicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
    let desplazamientoActual= window.pageYOffset;
    if (unicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    unicacionPrincipal = desplazamientoActual;
})
//Menu
let enlacesheader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;
document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){
    if (semaforo){
        document.querySelectorAll(".hamburger")[0].style.color = "#fff";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        semaforo = true;
    }
    enlacesheader.classList.toggle("menudos")
})