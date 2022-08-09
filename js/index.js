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





















