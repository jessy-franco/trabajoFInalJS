
let carrito4 = JSON.parse(localStorage.getItem("carrito")) || []
const detalle = document.getElementById("detalleDeCompra")

function productosDelCarrito() {
    carrito4.map(producto => {
        detalle.innerHTML += `
        <li class="detalleProd">
        <img src="${producto.img}" class= "detalleImg"/>
        <p>${producto.name}</p>
        <p>${producto.price}</p>
        <button class="botonBorrar">X</button>
        </li>`
    })
}


// el carrito tiene productos ? si tiene, mostrarlos : si no tiene mostrar mensaje
carrito4.length ? productosDelCarrito() : (detalle.innerHTML = `<h3>El carrito está vacío <br/> :(</h3>`)


    let total = carrito4.reduce((acc, curr) => acc + parseInt(curr.price), 0)
    let totalCompra = document.createElement("p")
    totalCompra.setAttribute("class", "total")
    totalCompra.innerText = ("Total: " + total)
    detalle.append(totalCompra)

    let botonBorrar = document.getElementsByClassName("botonBorrar")

    for (botonXX of botonBorrar) {
        botonXX.addEventListener("click", eliminarProducto2)
        console.log(carrito4)
    }
    

function eliminarProducto2(e) {
    detalle.innerHTML = "" 
    const botonXX = e.target;
    const idBotonXX = botonXX.getAttribute("id");
    let carritoDetalleProd = carrito4.findIndex(producto => producto.id === idBotonXX)
    carrito4.splice(carritoDetalleProd, 1)
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carrito4))
}
const vaciarCarro2 = document.querySelector("#vaciar2");

//vaciar carrito
vaciarCarro2.addEventListener("click", () => {
    carrito4 = []
    localStorage.clear()
    Toastify({
        text: "Su carrito esta vacio",
        duration: 3000
        }).showToast();

    detalle.innerHTML = ""
})
//FORMULARIO
let nombre = document.getElementsByClassName("nombre2")
let mail = document.getElementsByClassName("mail2")
let telefono = document.getElementsByClassName("telefono2")
let direccion = document.getElementsByClassName("direccion2")
let confirmacionDeCompra = document.getElementById("confirmacion2")
let submit = document.getElementById("submit")
let formulario = document.getElementsByClassName("form")

function terminarCompra() {

    if (nombre.value !== "" && mail.value !== "" && telefono.value !== "" && direccion.value !== "") {
        confirmacionDeCompra.innerHTML = `
<h3>Gracias por tu compra ${nombre.value}!</h3>
<p>En breve llegara la factura de su compra a ${mail.value}</p>
<p>La entrega demorara de 2 a 3 dias habiles a ${direccion.value}</p>
`
    } else {
        confirmacionDeCompra.innerHTML = `
        <h3>Por favor complete todos los campos</h3>`
    }
}


formulario.onsubmit = (e) => {
    e.preventDefault()
    terminarCompra()
    formulario.reset()
}