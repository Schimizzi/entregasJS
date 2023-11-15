


//CLASE --------

class Usuarios {
    constructor(nombre, edad, puntaje) {
        this.nombre = nombre;
        this.edad = edad;
        this.puntaje = puntaje
    }
    podio() {
        console.log(usuariosExamen.nombreNuevo + "tu puntaje es: " + usuariosExamen.puntaje)
    }

}
const usuariosPodio = [];
const usuario1 = new Usuarios("Carlos", 55, 8);
usuariosPodio.push(usuario1);
const usuario2 = new Usuarios("Romina", 22, 5);
usuariosPodio.push(usuario2);
let usuariosExamen = ""
let notaFinal = 0;

function newUser() {
    const nombreNuevo = prompt("ingrese su nombre");
    const edadNuevo = parseInt(prompt("ingrese su edad"));
    usuariosExamen = new Usuarios(nombreNuevo, edadNuevo, notaFinal);
    usuariosPodio.push(usuariosExamen);

    notaFinal = corregir();
    console.log(notaFinal);
    usuariosExamen.puntaje = corregir();
    //usuariosPodio.sort((a, b) => a.puntaje - b.puntaje);
    //console.log(usuariosPodio);
    console.log("El Primer lugar es para ", usuariosPodio[2].nombre, "con un puntaje de ", usuariosPodio[2].puntaje);
    console.log("El Segundo lugar es para ", usuariosPodio[1].nombre, "con un puntaje de ", usuariosPodio[1].puntaje);
    console.log("El Tercer lugar es para ", usuariosPodio[0].nombre, "con un puntaje de ", usuariosPodio[0].puntaje);


}



// Función para generar números aleatorios entre 1 y 10
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

// Función para crear una fila de ejercicio
function crearFilaEjercicio() {
    let fila = document.createElement('div');
    fila.classList.add('fila-ejercicio');

    let num1 = generarNumeroAleatorio();
    let num2 = generarNumeroAleatorio();

    // Mostrar los números aleatorios en los campos correspondientes
    fila.innerHTML = `
        <label>${num1}</label>
        <label>+ ${num2}</label>
        <label>= <input type="number" class="respuesta" required></label>
    `;

    document.getElementById('ejercicios').appendChild(fila);
}

// Función para corregir los resultados
function corregir() {
    let filasEjercicio = document.querySelectorAll('.fila-ejercicio');
    let resultadosCorrectos = 0;
    let resultadosIncorrectos = 0;

    filasEjercicio.forEach(function (fila) {
        let respuestaUsuario = parseInt(fila.querySelector('.respuesta').value);
        let num1 = parseInt(fila.querySelector('label:nth-child(1)').textContent);
        let num2 = parseInt(fila.querySelector('label:nth-child(2)').textContent.split(' ')[1]);
        let sumaCorrecta = num1 + num2;

        if (respuestaUsuario === sumaCorrecta) {
            resultadosCorrectos++;
        } else {
            resultadosIncorrectos++;
        }
    });

    // Mostrar resultados
    let correctosElemento = document.getElementById('correctos');
    let incorrectosElemento = document.getElementById('incorrectos');

    correctosElemento.textContent = 'Correctos: ' + resultadosCorrectos;
    incorrectosElemento.textContent = 'Incorrectos: ' + resultadosIncorrectos;
    return resultadosCorrectos;
}

// Inicializar 5 filas de ejercicios al cargar la página

window.onload = function () {
    for (let i = 0; i < 5; i++) {
        crearFilaEjercicio();
    }
};




//usuariosPodio[2].puntaje = notaPuntaje;
