let ventana2 = document.getElementById("ventana2");
let sonido1 = document.getElementById("audio1");

ventana2.onclick = function () {
    sonido1.play();
};

let elementoHora = document.getElementById("hora");

function actualizarReloj() {
    let ahora = new Date();

    let horas = String(ahora.getHours()).padStart(2, "0");
    let minutos = String(ahora.getMinutes()).padStart(2, "0");
    let segundos = String(ahora.getSeconds()).padStart(2, "0");

    console.log(horas + ":" + minutos + ":" + segundos);

    elementoHora.textContent = horas + ":" + minutos + ":" + segundos;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);


let informacionVentana3 = document.getElementById("informacion-ventana3");
let informacionVentana4 = document.getElementById("informacion-ventana4");
let informacionVentana5 = document.getElementById("informacion-ventana5");
let informacionVentana6 = document.getElementById("informacion-ventana6");

function actualizarTexto() {
    let ahora = new Date();
    let horas = ahora.getHours();

    if (horas >= 5 && horas < 8) {
        informacionVentana3.innerHTML =
            "<p><b>MJ</b>, de 25 años, alimenta a sus gatos y perros.</p>";
        informacionVentana4.innerHTML =
            "<p><b>Dunk</b>, de 26 años, se levanta y hace ejercicio en su cuarto.</p>";
        informacionVentana5.innerHTML =
            "<p><b>Daisy</b>, de 26 años, se alista y va al gimnasio.</p>";
        informacionVentana6.innerHTML =
            "<p><b>Jelly</b>, de 28 años, duerme pacíficamente.</p>";

    } 
    else if (horas >= 8 && horas < 12) {
        informacionVentana3.innerHTML =
            "<p><b>MJ</b>, de 25 años, se alista y desayuna antes de salir a la universidad.</p>";
        informacionVentana4.innerHTML =
            "<p><b>Dunk</b>, de 26 años, desayuna con su familia y se arregla para el trabajo.</p>";
        informacionVentana5.innerHTML =
            "<p><b>Daisy</b>, de 26 años, regresa del gimnasio, desayuna unos panqueques y se baña.</p>";
        informacionVentana6.innerHTML =
            "<p><b>Jelly</b>, de 28 años, se viste con una pinta bonita.</p>";
    } 
    else if (horas >= 12 && horas < 14) {
        informacionVentana3.innerHTML =
            "<p><b>MJ</b>, de 25 años, no está en casa, está en la universidad.</p>";
        informacionVentana4.innerHTML =
            "<p><b>Dunk</b>, de 26 años, no está en casa, está trabajando manejando su tienda de dulces.</p>";
        informacionVentana5.innerHTML =
            "<p><b>Daisy</b>, de 26 años, practica una nueva coreografía.</p>";
        informacionVentana6.innerHTML =
            "<p><b>Jelly</b>, de 28 años, no está en casa, está desayunando en una cafetería.</p>";
    } 
    else if (horas >= 14 && horas < 17) {
        informacionVentana3.innerHTML =
            "<p><b>MJ</b>, de 25 años, no está en casa, está en la universidad.</p>";
        informacionVentana4.innerHTML =
            "<p><b>Dunk</b>, de 26 años, no está en casa, está trabajando grabando contenido para su tienda de dulces.</p>";
        informacionVentana5.innerHTML =
            "<p><b>Daisy</b>, de 26 años, aun no tiene hambre, por lo que sigue practicando.</p>";
        informacionVentana6.innerHTML =
            "<p><b>Jelly</b>, de 28 años, no está en casa, está haciendo mercado.</p>";
    } 
    else if (horas >= 17 && horas < 19) {
        informacionVentana3.innerHTML =
            "<p><b>MJ</b>, de 25 años, no está en casa, está en el gimnasio después de clase.</p>";
        informacionVentana4.innerHTML =
            "<p><b>Dunk</b>, de 26 años, no está en casa, está cenando con sus amigos.</p>";
        informacionVentana5.innerHTML =
            "<p><b>Daisy</b>, de 26 años, se come un arroz con pollo.</p>";
        informacionVentana6.innerHTML =
            "<p><b>Jelly</b>, de 28 años, guarda el mercado en la cocina.</p>";
    } 
    else if (horas >= 19 && horas < 21) {
        informacionVentana3.innerHTML =
            "<p><b>MJ</b>, de 25 años, calienta su comida y adelanta tareas.</p>";
        informacionVentana4.innerHTML =
            "<p><b>Dunk</b>, de 26 años, hace su rutina antes de acostarse.</p>";
        informacionVentana5.innerHTML =
            "<p><b>Daisy</b>, de 26 años, llama a su novio para hablar sobre su día.</p>";
        informacionVentana6.innerHTML =
            "<p><b>Jelly</b>, de 28 años, habla con su novio por teléfono mientras que cena una sopa.</p>";
    }
    else {
        informacionVentana3.innerHTML =
            "<p><b>MJ</b>, de 25 años, se duerme a la media noche.</p>";
        informacionVentana4.innerHTML =
            "<p><b>Dunk</b>, de 26 años, se acuesta temprano y duerme bien.</p>";
        informacionVentana5.innerHTML =
            "<p><b>Daisy</b>, de 26 años, duerme 8 horas.</p>";
        informacionVentana6.innerHTML =
            "<p><b>Jelly</b>, de 28 años, se trasnocha viendo películas.</p>";
    }
}



let ventana3 = document.getElementById("ventana3");
let visible3 = false;

ventana3.onclick = function () {
    if(visible3 == true){
        visible3 = false;
    }
    else{
        visible3 = true;
    }

    if(visible3 == true){
        informacionVentana3.style.opacity = "1";
    }
    else{
        informacionVentana3.style.opacity = "0";
    }
};

let ventana4 = document.getElementById("ventana4");
let visible4 = false;

ventana4.onclick = function () {
    if(visible4 == true){
        visible4 = false;
    }
    else{
        visible4 = true;
    }

    if(visible4 == true){
        informacionVentana4.style.opacity = "1";
    }
    else{
        informacionVentana4.style.opacity = "0";
    }
};

let ventana5 = document.getElementById("ventana5");
let visible5 = false;

ventana5.onclick = function () {
    if(visible5 == true){
        visible5 = false;
    }
    else{
        visible5 = true;
    }

    if(visible5 == true){
        informacionVentana5.style.opacity = "1";
    }
    else{
        informacionVentana5.style.opacity = "0";
    }
};

let ventana6 = document.getElementById("ventana6");
let visible6 = false;

ventana6.onclick = function () {
    if(visible6 == true){
        visible6 = false;
    }
    else{
        visible6 = true;
    }

    if(visible6 == true){
        informacionVentana6.style.opacity = "1";
    }
    else{
        informacionVentana6.style.opacity = "0";
    }
};

actualizarTexto();
setInterval(actualizarTexto, 60000);