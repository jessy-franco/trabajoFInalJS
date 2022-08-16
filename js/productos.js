const carritoProductos = [];


/* Preguntar a Lucas como vincular ambos arrays en localstorage para que no me borre lo que deposito en el carrito desde las ofertas del index.html y los productos de productos.html...

probe subiendolo desde dos arrays diferentes pero me queda dudas de como traer esa informacion en un array vacio que me sirva desde carrito.html

probe subiendolo con al local con la misma identificacion pero se reemplazan y no conviven ambos

hay forma de que traiga la info desde 2 arrays y los convierta en uno solo para mostrar el detalle de compra o de ser en uno solo no se pise un dato con otro????
*/

let carrito3 = JSON.parse(localStorage.getItem("carrito")) || []; 

let gridProductos = document.querySelector("#productos2")

/* Ver ofertas en el grid */


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

function agregarAlCarrito2(e) {
    const boton2 = e.target;
    const idBoton2 = boton2.getAttribute("id"); 
    let productoSeleccionado2 = ofertasIndex.find(producto => producto.id === idBoton2);
    carritoProductos.push(productoSeleccionado2);
    
    //storage
    localStorage.setItem("carrito", JSON.stringify(carritoProductos));

    swal({
        title: "Agregaste al carrito",
        text: ` ${productoSeleccionado2.name} `,
        icon: "success",
    });
}

for (boton2 of botoncito) {
    boton2.addEventListener("click", agregarAlCarrito2)
} 

/* flecha hacia arriba */

arrowUpEvent.onclick = function () {
    window.scrollTo(scrollY, 0);
};