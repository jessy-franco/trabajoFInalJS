/* DOM */

const tituloPrincipal = document.querySelector("#titulo");
tituloPrincipal.innerText = "Adopta un nuevo miembro en tu familia";

let container = document.querySelector("#contenedor");
container.innerHTML = `<p> Veni a conocer nuestro vivero de otoño-invierno!!!</p>`;

let parrafo = document.createElement("p");
parrafo.innerHTML = "<h3>¡Veni a conocernos, seguinos en redes!!!!</h3>";
document.body.append(parrafo);

const productosEspeciales = document.querySelector("#productos");
const productos = ["rosa china", "jazmin", "pino", "cerezo", "azalea"];
const ofertas = document.querySelector("#ofertas");
ofertas.innerHTML = `<h2><strong> Ofertas de la semana...!!!</strong></h2>`;

for (const producto of productos) {
    let lista = document.createElement("li");
    lista.innerHTML = producto;
    productosEspeciales.appendChild(lista);
}


const loguin = {
    usuario1: "teteun",
    passwordLogin1: "1234",
}
/* eventos */

const iniciarSesion = document.querySelector("#inicioSesion");
const iniciarUsuario = document.querySelector("#usuario");
const iniciarPassword = document.querySelector("#password");



iniciarUsuario.onchange = () => {
    console.log(iniciarUsuario);
    if (iniciarUsuario.value.length > 2) {
        iniciarUsuario.style.border = "4px solid green";
    }
    else {
        iniciarUsuario.style.border = "4px solid red";
        submit.onclick = () => {
            const parrafoSaludo = document.querySelector("#saludo");
            parrafoSaludo.innerText = "Error, usuario o contraseña incorrecto";
        }
    }

}
iniciarPassword.onchange = () => {
    if (iniciarPassword.value.length >= 4) {
        iniciarPassword.style.border = "4px solid green";
    }
    else {
        iniciarPassword.style.border = "4px solid red"
        const parrafoSaludo = document.querySelector("#saludo");
        parrafoSaludo.innerText = "Contraseña no valida, el numero no puede ser menor a 4 digitos";
        submit.onclick = () => {
            const parrafoSaludo = document.querySelector("#saludo");
            parrafoSaludo.innerText = "Error, usuario o contraseña incorrecto";
        }
    }
}

const submit = document.querySelector("#submit");

submit.addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
        const parrafoSaludo = document.querySelector("#saludo");
        parrafoSaludo.innerText = "Hola, bienvenido!";
    }
});
submit.onclick = () => {
    const parrafoSaludo = document.querySelector("#saludo");
    parrafoSaludo.innerText = "Hola, bienvenido!";
}


iniciarSesion.onsubmit = function (e) {
    e.preventDefault();
    /* Hacer localStorage para validar el user */

}


/* flecha hacia arriba */

arrowUpEvent.onclick = function () {
    window.scrollTo(scrollY, 0);
};

/* cambio de imagen */

const margarita = document.querySelector(".marga");

margarita.onmouseover=()=>{
    cambioImg();
}

function cambioImg() {
    if (margarita.src.match("feliz")) {
        margarita.src = "imagenes/suculento.png"
    } else {
        margarita.src = "imagenes/feliz (1).png";
    }
}





















