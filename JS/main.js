// Var //

let opcion
let i = 4;
let nivel = ""
let notaPuntaje;
const generadorRandom = () => {
    return Math.round(Math.random() * 100)
}



// Class //

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

// Functions //

function newUser() {
    const nombreNuevo = document.getElementById('nombre').value;
    const edadNuevo = parseInt(document.getElementById('edad').value);
    const nota = 0;
    usuariosExamen = new Usuarios(nombreNuevo, edadNuevo, nota);
    usuariosPodio.push(usuariosExamen);
    console.log("Nuevo usuario registrado:", usuariosExamen);

}



function generarPregunta() {
    let num1 = 22;
    let num2 = 33;

    document.getElementById('pregunta').textContent = "Escriba el resultado de " + num1 + " + " + num2 + ":";
}

function verificarResultado() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultadoUsuario = parseInt(document.getElementById('resultado').value);

    let sumaCorrecta = num1 + num2;

    if (resultadoUsuario === sumaCorrecta) {
        alert("¡Muy bien!");
        reiniciarPrueba();
    } else if (i === 1) {
        i--;
        alert("Respuesta Incorrecta, Se le agotaron los intentos");
        reiniciarPrueba();
    } else {
        i--;
        alert("Respuesta Incorrecta, Le quedan " + i + " intentos");
    }
}

function reiniciarPrueba() {
    i = 4;
    generarPregunta();
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('resultado').value = "";
}

// Función generadora de números aleatorios
/*  function generadorRandom() {
    return Math.floor(Math.random() * 10) + 1; // Números aleatorios del 1 al 10
} */

// Iniciar la primera pregunta al cargar la página
window.onload = function () {
    generarPregunta();
};
 
function pruebasuma() {
    while (i < 12 && i > 0) {
        let num1 = generadorRandom()
        let num2 = generadorRandom()
        let sumax = num1 + num2;

        let resul = parseInt(prompt("escriba el resultado de " + num1 + " + " + num2 + ":"));
        if (sumax == resul) {
            alert("Muy bien!");
            break;
        } else if (i == 2) {
            i--
            alert("Respuesta Incorrecta, Le queda " + i + " intento");
        } else if (i == 1) {
            i--
            alert("Respuesta Incorrecta, Se le agotaron los intentos");
        } else {
            i--
            alert("Respuesta Incorrecta, Le quedan " + i + " intentos");
        }
    }
}
/* 
function pruebaresta() {
    while (i < 10 && i > 0) {
        let num1 = generadorRandom()
        let num2 = generadorRandom()
        let restax = num1 - num2;
        let resul = parseInt(prompt("escriba el resultado de " + num1 + " - " + num2 + ":"));
        if (restax == resul) {
            alert("Muy bien!");
            break;
        } else if (i == 2) {
            i--
            alert("Respuesta Incorrecta, Le queda " + i + " intento");
        } else if (i == 1) {
            i--
            alert("Respuesta Incorrecta, Se le agotaron los intentos");
        } else {
            i--
            alert("Respuesta Incorrecta, Le quedan " + i + " intentos");
        }
    }
}

function pruebadivision() {
    while (i < 12 && i > 0) {
        let num3 = Math.floor(Math.random() * 10) * 2;
        let divix = (num3 / 2);
        let resul = parseInt(prompt("escriba el resultado de " + num3 + " / 2 :"));
        if (divix == resul) {
            alert("Muy bien!");
            break;
        } else if (i == 2) {
            i--
            alert("Respuesta Incorrecta, Le queda " + i + " intento");
        } else if (i == 1) {
            i--
            alert("Respuesta Incorrecta, Se le agotaron los intentos");
        } else {
            i--
            alert("Respuesta Incorrecta, Le quedan " + i + " intentos");
        }
    }
}
 */
function nota() {
    if (i > 0) {
        let notaPun = i + 6
        console.log(usuariosExamen.nombre + ", ha aprobado el examen de Nivel " + opcion, "! con un " + notaPun);
        return notaPun;
    } else {
        let notaPun = i + 4
        console.log(usuariosExamen.nombre + ", ha reprobado el examen");
        return notaPun;
    }
}

// Start //

newUser();

while (true) {
    opcion = parseInt(prompt("ingrese la opcion deseada: / 1- Nivel facil / 2- Nivel Medio / 3- Nivel Dificil"))
    if (opcion === 1 || opcion === 2 || opcion === 3) {
        switch (opcion) {
            case 1:
                console.log("Nivel Facil");
                pruebasuma();
                pruebasuma();
                pruebasuma();
                notaPuntaje = nota();
                break;
            case 2:
                console.log("Nivel Medio");
                pruebasuma();
                pruebaresta();
                pruebasuma();
                pruebaresta();
                notaPuntaje = nota();
                break;
            case 3:
                console.log("Nivel Dificil");
                pruebasuma();
                pruebaresta();
                pruebadivision();
                notaPuntaje = nota();
                break;
            default:
                console.log("Opción no válida");
        }
        break;
    } else {
        console.log("otra oportunidad");
    }
}
usuariosPodio[2].puntaje = notaPuntaje;
usuariosPodio.sort((a, b) => a.puntaje - b.puntaje);
console.log(usuariosPodio)
console.log("El Primer lugar es para ", usuariosPodio[2].nombre, "con un puntaje de ", usuariosPodio[2].puntaje);
console.log("El Segundo lugar es para ", usuariosPodio[1].nombre, "con un puntaje de ", usuariosPodio[1].puntaje);
console.log("El Tercer lugar es para ", usuariosPodio[0].nombre, "con un puntaje de ", usuariosPodio[0].puntaje);
