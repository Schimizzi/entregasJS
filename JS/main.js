
//CLASS --------

class Usuarios {
    constructor(nombre, dni, puntaje) {
        this.nombre = nombre;
        this.dni = dni;
        this.puntaje = puntaje
    }
    podio() {
        console.log(usuariosExamen.nombreNuevo + "tu puntaje es: " + usuariosExamen.puntaje)
    }
}

function mostrarUsuariosEnDOM() {
    const listaUsuarios = document.getElementById("lista-usuarios");
    listaUsuarios.innerHTML = ""; 

    usuariosPodio.sort((a, b) => b.puntaje - a.puntaje);

    usuariosPodio.slice(0, 10).forEach(usuario => {
        const listItem = document.createElement("li");
        listItem.textContent = `${usuario.nombre} - Puntaje: ${usuario.puntaje}`;
        listaUsuarios.appendChild(listItem);
    });
}

// JSON -----------
const usuariosPodio = JSON.parse(localStorage.getItem("usuariosPodio")) || [];

 
function guardarUsuariosEnLocalStorage() {
    const usuarioExistente = usuariosPodio.find(user => user.nombre === usuariosExamen.nombre);

    if (!usuariosPodio[2].nombre) {
        usuariosPodio.push(usuariosPodio[2].nombre);
    }else if(!usuariosPodio[1].nombre){
        usuariosPodio.push(usuariosPodio[1].nombre);
    }else if(!usuariosPodio[0].nombre){
        usuariosPodio.push(usuariosPodio[0].nombre);
    }else {
        console.log("prueba");
        }
    usuariosPodio.sort((a, b) => b.puntaje - a.puntaje);
    usuariosPodio.splice(10);

    localStorage.setItem("usuariosPodio", JSON.stringify(usuariosPodio));
    mostrarUsuariosEnDOM();
}

const usuario1 = new Usuarios("Carlos", 55, 7);
usuariosPodio.push(usuario1);
const usuario2 = new Usuarios("Romina", 22, 5);
usuariosPodio.push(usuario2);
let usuariosExamen = ""
let notaFinal = 0;

function newUser() {
    notaFinal = corregir();
    const nombreNuevo = prompt("ingrese su nombre");
    const dniNuevo = parseInt(prompt("ingrese su DNI"));
    usuariosExamen = new Usuarios(nombreNuevo, dniNuevo, notaFinal);
    usuariosPodio.push(usuariosExamen);

    usuariosPodio.sort((a, b) => a.puntaje - b.puntaje);
    guardarUsuariosEnLocalStorage();
    console.log(usuariosPodio);
    console.log("El Primer lugar es para ", usuariosPodio[2].nombre, "con un puntaje de ", usuariosPodio[2].puntaje);
    console.log("El Segundo lugar es para ", usuariosPodio[1].nombre, "con un puntaje de ", usuariosPodio[1].puntaje);
    console.log("El Tercer lugar es para ", usuariosPodio[0].nombre, "con un puntaje de ", usuariosPodio[0].puntaje);
}

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

// CREO LAS FILAS Y MUESTRO
function crearFilaEjercicio() {
    let fila = document.createElement("div");
    fila.classList.add("fila-ejercicio");

    let num1 = generarNumeroAleatorio();
    let num2 = generarNumeroAleatorio();

    fila.innerHTML = `<label>${num1}</label> <label>+ ${num2}</label> <label>= <input type="number" class="respuesta" required></label>`;

    document.getElementById("ejercicios").appendChild(fila);
}

function corregir() {
    let filasEjercicio = document.querySelectorAll(".fila-ejercicio");
    let resultadosCorrectos = 0;
    let resultadosIncorrectos = 0;

    filasEjercicio.forEach(function (fila) {
        let respuestaUsuario = parseInt(fila.querySelector(".respuesta").value);
        let num1 = parseInt(fila.querySelector("label:nth-child(1)").textContent);
        let num2 = parseInt(fila.querySelector("label:nth-child(2)").textContent.split(" ")[1]);
        let sumaCorrecta = num1 + num2;

        if (respuestaUsuario === sumaCorrecta) {
            resultadosCorrectos++;
        } else {
            resultadosIncorrectos++;
        }
    });

    let correctosElemento = document.getElementById("correctos");
    let incorrectosElemento = document.getElementById("incorrectos");

    correctosElemento.textContent = "Correctos: " + resultadosCorrectos;
    incorrectosElemento.textContent = "Incorrectos: " + resultadosIncorrectos;
    return resultadosCorrectos * 2;
}

// VER EN DOM

window.onload = function () {
    for (let i = 0; i < 5; i++) {
        crearFilaEjercicio();
    }
    mostrarUsuariosEnDOM();
};

