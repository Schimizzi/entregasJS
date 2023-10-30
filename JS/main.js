//const nombre = prompt("ingrese su nombre y apellido");
//const edad = prompt("ingrese su edad");

let opcion
let i = 4;
let nivel = ""
let notaPuntaje;
const generadorRandom = () => {
    return Math.round(Math.random() * 100)
}


//// pruebas para la proxima entrega
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
const usuario1 = new Usuarios("Carlos", 55, 6);
usuariosPodio.push(usuario1);
const usuario2 = new Usuarios("Romina", 22, 4);
usuariosPodio.push(usuario2);
let usuariosExamen = ""

function newUser() {
    const nombreNuevo = prompt("ingrese su nombre y apellido");
    const edadNuevo = parseInt(prompt("ingrese su edad"));
    const nota = 0;
    usuariosExamen = new Usuarios(nombreNuevo, edadNuevo, nota);
    usuariosPodio.push(usuariosExamen);
}
newUser();
console.log(usuariosPodio);
console.log(usuariosExamen.nombre);



////hasta aca lo nueva

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
function nota() {
    if (i > 0) {
        let notaPun = i + 6
        console.log(usuariosExamen.nombre + ", ha aprobado el examen de nivel " + opcion, "! con una nota de:" + notaPun);        
        return notaPun;
    } else {
        console.log(usuariosExamen.nombre + ", ha reprobado el examen");
    }
}


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
console.log(notaPuntaje);
usuariosPodio[2].puntaje = notaPuntaje;
//usuariosPodio.push(usuariosExamen[2].puntaje);
usuariosPodio.sort((a, b) => a.puntaje - b.puntaje);
/* usuariosPodio.forEach( usuariosExamen => {
    console.log(j +""+ usuariosExamen.nombre + "- Edad: "+ usuariosExamen.edad+ " - Puntaje: "+ usuariosExamen.puntaje);
});

usuariosPodio.forEach(function(usuariosExamen) {
    console.log(j + "" + usuariosExamen.nombre + " - Edad: " + usuariosExamen.edad + " - Puntaje: " + usuariosExamen.puntaje);
});
 */
console.log(usuariosPodio)
console.log("El Primer lugar es para: ", usuariosPodio[2].nombre);
console.log("El Segundo lugar es para: ", usuariosPodio[1].nombre);
console.log("El Tercer lugar es para: ", usuariosPodio[0].nombre);
