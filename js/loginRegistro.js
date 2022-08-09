const registrarUser = document.querySelector("#registroUser");
const nuevoUsuario = document.querySelector("#nuevoUsuario");
const nuevoPassword = document.querySelector("#nuevaPassword");
const asideDeFormulario2 = document.querySelector("aside");
const main2 = document.querySelector("main");
const parrafoSaludo2 = document.querySelector("#saludo2");
const parrafoDeIngresante2 = document.querySelector("#ingresaste2");


const listaRegistrarUser = [
]
console.log(listaRegistrarUser)

/* registrar usuario y luego validar */

class registrarUsuario {
    constructor(usuario, contrasenia){
        this.usuario = usuario;
        this.contrasenia = contrasenia;

    }
}
registrarUser.onsubmit = (event) => {
    event.preventDefault()
    listaRegistrarUser.push(new registrarUsuario(nuevoUsuario.value, nuevoPassword.value))
    if(registrarUser != ""){
        parrafoDeIngresante2.innerText = "Hola, bienvenido!";
        main2.style.display = "flex";
        main2.style.flexDirection = "column";
        asideDeFormulario2.style.display = "none"; 
    }
} 



nuevoUsuario.onchange = () => {
    if (nuevoUsuario.value.length > 2) {
        nuevoUsuario.style.border = "4px solid green";
    }
    else {
        nuevoUsuario.style.border = "4px solid red";
        submit.onclick = () => {
            const parrafoSaludo = document.querySelector("#saludo");
            parrafoSaludo.innerText = "Error, usuario o contraseña incorrecto";
        }
    }

} 
nuevoPassword.onchange = () => {
    if (nuevoPassword.value.length >= 4) {
        nuevoPassword.style.border = "4px solid green";
    }
    else {
        nuevoPassword.style.border = "4px solid red"
        const parrafoSaludo = document.querySelector("#saludo");
        parrafoSaludo.innerText = "Contraseña no valida, el numero no puede ser menor a 4 digitos";
        submit.onclick = () => {
            const parrafoSaludo = document.querySelector("#saludo");
            parrafoSaludo.innerText = "Error, usuario o contraseña incorrecto";
        }
    }
}

const submit = document.querySelector("#submit");


/* Hacer localStorage para validar el user */