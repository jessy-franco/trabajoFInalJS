
const loginSesion = document.querySelector("#login");
const loginUser = document.querySelector("#usuario");
const passIngreso = document.querySelector("#password");
const main = document.querySelector("main");
const asideDeFormulario = document.querySelector("aside");

const parrafoSaludo = document.querySelector("#saludo");
const parrafoDeIngresante = document.querySelector("#ingresaste");

const submit = document.querySelector("#submit");


loginUser.onchange = () => {
    if (loginUser.value.length > 3) {
        loginUser.style.border = "4px solid green";
    }
    else {
        loginUser.style.border = "4px solid red";
        parrafoSaludo.innerText = "Error, usuario es mayor a 3 caracteres";
        submit.onclick = () => {
            parrafoSaludo.innerText = "pruebe con otro usuario";
        }
    }

}
passIngreso.onchange = () => {
    if (passIngreso.value.length >= 4) {
        passIngreso.style.border = "4px solid green";
    }
    else {
        passIngreso.style.border = "4px solid red"
        parrafoSaludo.innerText = "Contraseña no valida, el numero no puede ser menor a 4 digitos";
        submit.onclick = () => {
            parrafoSaludo.innerText = "pruebe otra contraseña";
        }
    }
} 


const listaRegistrados = [
    {
        usuario: "teteun",
        passwordLogin: "1234",
    }
]
const usuariosJSON = JSON.stringify(listaRegistrados)
localStorage.setItem("usuarios", usuariosJSON)
const obtenerUsers = localStorage.getItem("usuarios")
const datosUsers = JSON.parse(obtenerUsers)
console.log(datosUsers) 

loginSesion.onsubmit = (e) => {
    e.preventDefault();
    listaRegistrados.forEach(users => {
        if (users.usuario === loginUser.value && users.passwordLogin === passIngreso.value) {
            parrafoDeIngresante.innerText = "Hola, bienvenido!";
            main.style.display = "flex";
            main.style.flexDirection = "column";
            asideDeFormulario.style.display = "none";  
            localStorage.setItem("usuarioRegistrado", true);
        }
        else {
            loginSesion.reset()
            parrafoSaludo.innerText = "El usuario o contraseña es incorrecto";
        }
    })

}

