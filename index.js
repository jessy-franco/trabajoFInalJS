
const tituloPrincipal = document.querySelector("#titulo");
tituloPrincipal.innerText = "Adopta un nuevo miembro en tu familia";

let container = document.querySelector("#contenedor");
container.innerHTML = `<p> Veni a conocer nuestro vivero de otoño-invierno!!!</p>`;

let parrafo = document.createElement("p");
parrafo.innerHTML = "<h3>¡Veni a conocernos, seguinos en redes!!!!</h3>"; 
document.body.append(parrafo);

const productosEspeciales = document.querySelector("#productos");
const productos = ["rosa china","jazmin", "pino", "cerezo","azalea"];
const ofertas = document.querySelector("#ofertas");
ofertas.innerHTML= `<h2><strong> Ofertas de la semana...!!!</strong></h2>`;

for (const producto of productos) {
    let lista = document.createElement("li");
    lista.innerHTML = producto;
    productosEspeciales.appendChild(lista);
}
/* const formulario=document.querySelector(".form");
const usuario1= document.querySelector("#usuario").value ="teteun";
    const password1= parseInt(document.querySelector("#password").value ="1234"); 
if(usuario1 == "teteun" && password1 == 1234){
    const parrafoSaludo = document.querySelector("#saludo");
    parrafoSaludo.innerText = "bienvenido";
} */

const submit = document.querySelector("#submit")

