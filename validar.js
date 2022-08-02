/* pasar a dom y storage */

/* validar usuario que ya esta en la lista */
let usuario1 = "teteun";
let passwordLogin1 = "1234";
const listaUsRegistrados = [];
const listaIngresado = [];
listaUsRegistrados.push(usuario1, passwordLogin1);

console.log(listaUsRegistrados)

const iniciarSesion= document.querySelector("#inicioSesion");
let iniciarUsuario= document.querySelector("#usuario").value;
let  iniciarPassword= parseInt(document.querySelector("#password").value);
listaIngresado.push(iniciarUsuario, iniciarPassword);
console.log(listaIngresado);



 /*    console.log(listaUsRegistrados)
    const parrafoSaludo = document.querySelector("#saludo");
    parrafoSaludo.innerText = "bienvenido"; */


/* registrar usuario y luego validar */

/* class registrarUsuario {
    constructor(usuario, contrasenia){
        this.usuario = usuario;
        this.contrasenia = contrasenia;

    }
}
registro.onsubmit = (event) => {
    event.preventDefault()
    listaRegistrados.push(new registrarUsuario(inputUsuario.value, inputContrasenia.value))
} */


