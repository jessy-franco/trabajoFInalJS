
/* DOM */

const tituloPrincipal = document.querySelector("#titulo");
tituloPrincipal.innerText = "Adopta un nuevo miembro en tu familia";

let container = document.querySelector("#contenedor");
container.innerHTML = `<p> Veni a conocer nuestro vivero de otoño-invierno!!!</p>`;

let parrafo = document.createElement("p");
parrafo.innerHTML = "<h3>¡Veni a conocernos, seguinos en redes!!!!</h3>";
document.body.append(parrafo);

const ofertas = document.querySelector("#ofertas");
ofertas.innerHTML = `<h2><strong> Ofertas de la semana...!!!</strong></h2>`;


/* flecha hacia arriba */

arrowUpEvent.onclick = function () {
    window.scrollTo(scrollY, 0);
};

/* cambio de imagen */

const CambiaDino = document.querySelector(".dinoPlanta");

CambiaDino.onmouseover = () => {
    cambioImg();
}

function cambioImg() {
    if (CambiaDino.src.match("feliz")) {
        CambiaDino.src = "imagenes/suculento.png"
    } else {
        CambiaDino.src = "imagenes/feliz (1).png";
    }
}

/* Oferta de productos */

let ofertaDeProductos = document.querySelector("#productos")

const carrito = [];

let carrito2 = JSON.parse(localStorage.getItem("carrito")) || []; 

/* Ver productos en el grid */

function verOfertas(elementos) {
    elementos.forEach(producto => {
        ofertaDeProductos.innerHTML += `
        <div class="producto">
            <img src=${producto.img}>
            <p>${producto.name}   $${producto.price}</p>
            <button class="agregarProducto" id="${producto.id}">Agregar al carrito</button>
        </div>`
    });
}

verOfertas(ofertasIndex)


let botonPush = document.getElementsByClassName("   agregarProducto");
const divCarrito = document.querySelector("#carrito");
const carritoSection = document.querySelector("#miCarrito");
const vaciarCarro = document.querySelector("#vaciar");

function agregarAlCarrito(e) {
    divCarrito.innerHTML = ""
    const boton = e.target;
    const idBoton = boton.getAttribute("id");
    let productoSeleccionado = ofertasIndex.find(producto => producto.id === idBoton)
    carrito.push(productoSeleccionado)
    console.log(carrito)
    
    //storage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Agregaste " + productoSeleccionado.name + " al carrito")

    mostrarCarrito()
}
for (boton of botonPush) {
    boton.addEventListener("click", agregarAlCarrito)
}

//MOSTRAR CARRITO

function mostrarCarrito() {
    carrito.forEach(producto => {
        divCarrito.innerHTML += `
            <div class="productoCarrito">
                <img src=${producto.img}>
                <h2>${producto.name}  $${producto.price}</h2>
                <button class="botonBorrar" id="${producto.id}">X</button>
            </div>
            `
    })
    let total = carrito.reduce((acc, curr) => acc + parseInt(curr.price), 0)
    let totalCompra = document.createElement("p")
    totalCompra.setAttribute("class", "total")
    totalCompra.innerText = ("Total: " + total)
    divCarrito.append(totalCompra)

    let botonBorrar = document.getElementsByClassName("botonBorrar")
    // console.log(botonBorrar)

    for (botonX of botonBorrar) {
        botonX.addEventListener("click", eliminarProducto)
    }

    //vaciar carrito
    vaciarCarro.addEventListener("click", () => {
        carrito = []
        localStorage.clear()
        divCarrito.innerHTML = ""
    })

    let terminarCompra = document.createElement("button")
    terminarCompra.setAttribute("class", "terminarCompra")
    terminarCompra.innerHTML=("Finalizar compra")
    divCarrito.append(terminarCompra)


    terminarCompra.addEventListener("click", () => {
        window.location.href = "../pages/carrito.html"
    })
}
carrito.length && mostrarCarrito()


//ELIMINAR PRODUCTO
function eliminarProducto(e) {
    divCarrito.innerHTML = ""
    const botonX = e.target;
    const idBotonX = botonX.getAttribute("id");
    let indexProducto = carrito.findIndex(producto => producto.id === idBotonX)
    carrito.splice(indexProducto, 1)
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito(carrito)
}
/* function agregarProductosAlCarro(e) {
    contenedorCarrito.innerHTML = "";
    const boton = e.target;
    const idBoton = boton.getAttribute("id");
    let productoElegido = ofertasIndex.find(elemento => elemento.id === idBoton) 

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Agregaste " + productoElegido.name + " al carrito")

    mostrarCarrito()
}
botonAgregar.addEventListener("click", agregarProductosAlCarro)  */

/* mostrar el carrito */

/* function mostrarCarrito() {
    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <div class="productoCarrito">
                <img src=${producto.img}>
                <h2>${producto.name}   $${producto.price}</h2>
                <button class="botonBorrar" id="${producto.id}">X</button>
            </div>
            `
    })
}
 */

/* while (carrito != "") {
    let total = carrito.reduce((acc, curr) => acc + parseInt(curr.price), 0)
    /* let total = carritoDeCompras.reduce((a, b) => a + parseInt (b.price), 0) */
/*   let totalCompra = document.createElement("p")
  totalCompra.setAttribute("class", "total")
  totalCompra.innerText = ("Total: " + total)
  contenedorCarrito.append(totalCompra)
  console.log(carrito)

}  */
/* let total = carrito.reduce((a, b) => a + (b.precio), 0)
let totalCompra = document.createElement("p")
totalCompra.setAttribute("class", "total")
totalCompra.innerText = ("Total: " + total)
contenedorCarrito.append(totalCompra) */
/* 
let botonBorrar = document.getElementsByClassName("botonBorrar")


for (botonX of botonBorrar) {
    botonX.addEventListener("click", eliminarProducto)
}

//vaciar carrito
vaciar.addEventListener("click", () => {
    carrito = []
    localStorage.clear()
    contenedorCarrito.innerHTML = ""
})

let terminarCompra = document.createElement("button")
terminarCompra.setAttribute("class", "terminarCompra")
terminarCompra.innerHTML = ("Finalizar compra")
contenedorCarrito.append(terminarCompra)

terminarCompra.addEventListener("click", () => {
    window.location.href = "../pages/carrito.html"
})


carrito.length && mostrarCarrito()


//ELIMINAR PRODUCTO
function eliminarProducto(productos) {
    contenedorCarrito.innerHTML = ""
    const botonX = productos.target;
    const idBotonX = botonX.getAttribute("id");
    let indexProducto = carrito.findIndex(producto => producto.id === idBotonX)
    carrito.splice(indexProducto, 1)
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito(carrito)
} */