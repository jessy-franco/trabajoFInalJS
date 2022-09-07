
/* DOM */

const tituloPrincipal = document.querySelector("#titulo");
tituloPrincipal.innerText = "Adopta un nuevo miembro en tu familia";


const ofertas = document.querySelector("#ofertas");
ofertas.innerHTML = `<h2><strong>Productos</strong></h2>`;


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

/* const carritoProductos = [] */


/* SECCION PRODUCTOS GRID CON FILTROS*/

let carrito = [];

let carrito2 = JSON.parse(localStorage.getItem("carrito")) || [];



let gridProductos = document.querySelector("#productos2")


/* Ver productos en el grid */


function verProductos(ofertasIndex) {
    ofertasIndex.forEach(producto => {
        gridProductos.innerHTML += `
        <div class="producto">
            <img src=${producto.img}>
            <p>${producto.name}   $${producto.price}</p>
            <button class="agregarProducto2" id="${producto.id}">Agregar al carrito</button>
        </div>`
    });
}
verProductos(ofertasIndex)



/* Agregar al carrito */


let botoncito = document.getElementsByClassName("agregarProducto2");

const detalle = document.getElementById("detalleDeCompra");
const carritoSection = document.querySelector("#miCarrito");
const vaciarCarro2 = document.querySelector("#vaciar");

/* function agregarAlCarrito(e) {
    detalle.innerHTML = ""
    const boton = e.target;
    const idBoton = boton.getAttribute("id");
    let productoSeleccionado2 = ofertasIndex.find(producto => producto.id === idBoton)

    console.log(productoSeleccionado2, idBoton)

    carrito.push(productoSeleccionado2)

    //storage
    localStorage.setItem("carrito", JSON.stringify(carrito));


    swal({
        title: "Agregaste al carrito",
        text: ` ${productoSeleccionado2.name} `,
        icon: "success",
    });
}
for (boton of botoncito) {
    boton.addEventListener("click", agregarAlCarrito)
}
 */
function agregarAlCarrito(e) {
    detalle.innerHTML = ""
    const boton = e.target;
    const idBoton = boton.getAttribute("id");
    let productoSeleccionado = ofertasIndex.find(producto => producto.id === idBoton)
    carrito.push(productoSeleccionado)

    //storage
    localStorage.setItem("carrito", JSON.stringify(carrito));


    swal({
        title: "Agregaste al carrito",
        text: ` ${productoSeleccionado.name} `,
        icon: "success",
    });
    mostrarCarrito()
}
for (boton of botoncito) {
    boton.addEventListener("click", agregarAlCarrito)
}



//MOSTRAR CARRITO


//MOSTRAR CARRITO

function mostrarCarrito() {
    carrito.forEach(producto => {
        detalle.innerHTML += `
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
    detalle.append(totalCompra)

    let botonBorrar = document.getElementsByClassName("botonBorrar")
    // console.log(botonBorrar)

    for (botonX of botonBorrar) {
        botonX.addEventListener("click", eliminarProducto)
    }

    const vaciarCarro = document.querySelector("#vaciar");

    //vaciar carrito

    vaciarCarro.addEventListener("click", () => {
        carrito2 = []
        localStorage.clear()
        Toastify({
            text: "Su carrito esta vacio",
            duration: 3000
        }).showToast();

        detalle.innerHTML = `<h3>El carrito está vacío <br/> :(</h3>`
    })
}
carrito.length? mostrarCarrito() : detalle.innerHTML = `<h3>Su carrito espera ser llenado!!! <br/> :)</h3>`


    /*Botn para eliminar un producto */

    function eliminarProducto(e) {
        detalle.innerHTML = ""
        const botonX = e.target;
        const idBotonX = botonX.getAttribute("id");
        let indexProducto = carrito.findIndex(producto => producto.id === idBotonX)
        carrito.splice(indexProducto, 1)
        localStorage.removeItem("carrito")
        localStorage.setItem("carrito", JSON.stringify(carrito))
        mostrarCarrito(carrito)
    }





    //FORMULARIO
    let nombre = document.getElementById("nombre2")
    let mail = document.getElementById("mail2")
    let telefono = document.getElementById("telefono2")
    let direccion = document.getElementById("direccion2")
    let confirmacionDeCompra = document.getElementById("confirmacion2")
    let submit = document.getElementById("submit")
    let formulario = document.getElementById("form")

    function terminarCompra() {
        if (nombre.value !== "" && mail.value !== "" && telefono.value !== "" && direccion.value !== "") {
            confirmacionDeCompra.innerHTML = `
<h3>Gracias por tu compra ${nombre.value}!</h3>
<p>En breve llegara su link de pago a ${mail.value}</p>
<p>La entrega demorara de 2 a 3 dias habiles a partir de la acreditacion del pago a ${direccion.value}. Su codigo de seguimiento sera enviado a ${mail.value}</p>
`
        } else {

            swal({
                title: "Por favor complete todos los campos!!!",
                icon: "warning",
            });

        }
    }


    formulario.onsubmit = (e) => {
        e.preventDefault()
        terminarCompra()
        formulario.reset()
    }


