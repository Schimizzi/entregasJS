// Var //

let opcion
let i = 4;
let nivel = ""
let notaPuntaje;



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
generadorRandom = () => {
    return Math.round(Math.random() * 100)
}


function newUser() {
    const nombreNuevo = document.getElementById('nombre').value;
    const edadNuevo = parseInt(document.getElementById('edad').value);
    const nota = 0;
    usuariosExamen = new Usuarios(nombreNuevo, edadNuevo, nota);
    usuariosPodio.push(usuariosExamen);
    console.log("Nuevo usuario registrado:", usuariosExamen);

}



function generarEjercicio() {
    let num1 = generadorRandom();
    let num2 = generadorRandom();
    return { num1: num1, num2: num2 };
}

window.onload = function () {
    generarEjercicio();
};



function verificarResultado(callback) {
    let numeros = generarEjercicio();
    console.log(numeros);
    let num1 = numeros.num1;
    console.log(num1);
    let num2 = numeros.num2;
    console.log(num2);
    document.getElementById('pregunta').textContent = "Escriba el resultado de " + num1 + " + " + num2 + ":";

    document.getElementById('verificarBtn').addEventListener('click', function () {
        let resultadoUsuario = parseInt(document.getElementById('resultadoSuma').value);
        console.log("num1 + num2 ", num1 + num2);
        console.log("resultadoUsuario", resultadoUsuario);

        if (resultadoUsuario === (num1 + num2)) {
            console.log("¡Muy bien!");
            if (typeof callback === 'function') {
               callback();
            }
        } else {
            console.log("Respuesta Incorrecta");
            if (typeof callback === 'function') {
                callback(); 
            }
        }

        console.log("nuevo callback creado");
    });
}


/* function pruebasuma() {
    while (i < 12 && i > 0) {
        let num1 = generadorRandom()
        let num2 = generadorRandom()
        let sumax = num1 + num2;

        let resul = parseInt(document.getElementById('resultadoSuma').value);
        if (sumax === resul) {
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
} */
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
    //    opcion = parseInt(prompt("ingrese la opcion deseada: / 1- Nivel facil / 2- Nivel Medio / 3- Nivel Dificil"))
    //    if (opcion === 1 || opcion === 2 || opcion === 3) {
    if (true) {

        switch (1) {
            case 1:
                console.log("Nivel Facil");
                verificarResultado();
                //verificarResultado();
                //verificarResultado();
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
