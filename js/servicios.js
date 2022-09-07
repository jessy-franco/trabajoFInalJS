/* flecha hacia arriba */

arrowUpEvent.onclick = function () {
    window.scrollTo(scrollY, 0);
};

const comentariosClientes = document.querySelector('#comentarios')

fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((response) => response.json())
    .then((data) => 
    data.forEach((comentarios) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <h4>${comentarios.name}</h4>
            <p>${comentarios.body}</p>
        `
        comentariosClientes.append(li)
    })
)