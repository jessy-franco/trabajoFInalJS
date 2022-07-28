let iniciarSesion = prompt("Para realizar su compra debe iniciar sesion, si ya tiene usuario ingrese (in), sino registrese con (re)");

let usuario1 = "teteun";
let passwordLogin1 = "1234";
const listaUsRegistrados = [];
listaUsRegistrados.push(usuario1, passwordLogin1);

while (iniciarSesion != "") {
    if (iniciarSesion == "in") {
        let usuario = prompt("Ingrese su usuario:");
        if (listaUsRegistrados.includes(`${usuario}`)) {
            let password = parseInt(prompt("Ingrese su contraseña: "));
            if (listaUsRegistrados.includes(`${password}`)) {
                alert(`Login exitoso, Bienvenida/o, siga con su compra!!!`);
            }
            else{
                alert(`La contraseña es incorrecta, pruebe nuevamente`);
                continue;
            }
        }
        else {
            alert(`El usuario es incorrecto, pruebe nuevamente`);
            continue
        }
    }

    else if (iniciarSesion == "re") {
        class registroUsuario {
            constructor(nombre, apellido, edad, direccion, usuario, password) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.edad = edad;
                this.direccion = direccion;
                this.usuario = usuario;
                this.password = password;
            }
        }
        const registro = new registroUsuario(prompt("ingrese su nombre"), prompt("Ingrese su apellido"), parseInt(prompt("ingrese su edad")), prompt("Ingrese su direccion"), prompt("Ingrese un usuario"), prompt("Ingrese una contraseña"));
        alert(`Se registro exitosamente`);
        listaUsRegistrados.push(registro);
        let usuario = prompt("Ingrese su usuario:");
        let password = parseInt(prompt("Ingrese su contraseña: "));
        alert(`Bienvenido/a ${usuario}`)
        break
    }
    else {
        alert(`La entrada ingresada no es valida`)
        let iniciarSesion = prompt("Para realizar su compra debe iniciar sesion, si ya tiene usuario ingrese (in), sino registrese con (re)");
        continue
    }
    break
}

let productos = prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");

function vuelvaPronto() {
    alert("Gracias por su compra!");
}
function totalProductos() {
    let total = listaProductos.reduce((a, b) => a + b, 0);
    carritoSinIva.push(total);
    alert(`El total de su compra sin iva es: ${total}`);
}
function prodConIva(){
    let totalConIva = carritoSinIva.map( (num)=> {
        return num * 1.21;
    } )
        alert(`El total de su compra con iva final es: ${totalConIva}`)
    
} 
/* Probar con foreach en array con objetos... no hice un array con objetos para ejemplificar esto porque me interesan que sean datos que ingresan mediante el usuario, no con objetos pre insertados */

const listaProductos = [];
const carritoSinIva =[];

while (productos != "") {
    if (productos == "p") {
        let plantas = parseInt(prompt("El valor de cada planta es de 400 pesos +iva. ingrese cuantas plantas desea comprar."));
        let resultado = (`${plantas}`) * 400;
        alert(`El total de su compra es: ${resultado}`);
        listaProductos.push(resultado);
        let carrito = prompt("Desea comprar mas productos? (s)/(n)");
        switch (carrito) {
            case "s":
                productos = prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
                continue
            case "n":
                totalProductos();
                prodConIva(); 
                vuelvaPronto();
                break
            default:
                alert("La entrada no es valida");
        }


    }
    else if (productos == "m") {
        let macetas = parseInt(prompt("El valor de cada maceta es de 500 pesos +iva. ingrese cuantas macetas desea comprar."));
        let resultado2 = (`${macetas}`) * 500;
        alert(`El total de su compra es: ${resultado2}`);
        listaProductos.push(resultado2);
        let carrito = prompt("Desea comprar mas productos? (s)/(n)")
        switch (carrito) {
            case "s":
                productos = prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
                continue
            case "n":
                totalProductos();
                prodConIva(); 
                vuelvaPronto();
                break
            default:
                alert("La entrada no es valida");
        }
    }
    else if (productos == "i") {
        let insumos = parseInt(prompt("El valor de cada insumo es de 300 pesos +iva. ingrese cuantas insumos desea comprar."))
        let resultado3 = (`${insumos}`) * 300;
        alert(`El total de su compra es: ${resultado3}`);
        listaProductos.push(resultado3);
        let carrito = prompt("Desea comprar mas productos? (s)/(n)")
        switch (carrito) {
            case "s":
                productos = prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
                continue
            case "n":
                totalProductos();
                prodConIva();
                vuelvaPronto();
                break
            default:
                alert("La entrada no es valida");
        }

    }

    else {
        alert("La opcion ingresada no es válida");
        productos = prompt("Ingrese (p) si desea comprar plantas, (m) si desea comprar macetas o (i) si desea comprar insumos");
        continue
    }
    break
}
