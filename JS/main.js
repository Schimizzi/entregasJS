const nombre = prompt("ingrese su nombre y apellido");
let opcion
let i = 4;
let nivel = ""
const generadorRandom = () => {
    return Math.round(Math.random() * 100)
}


//// pruebas para la proxima entrega
/* class Usuarios{
    constructor(nombre, edad, puntaje){
        this.nombre=nombre;
        this.edad=edad;
        this.puntaje=puntaje
    }
    podio(){
        
    }

} */

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
        let nota = i + 6
        console.log(nombre + ", ha aprobado el examen de nivel "+opcion,"! con una nota de:" + nota);

    } else {
        console.log(nombre + ", ha reprobado el examen");
    }
}

while(true){
    opcion = parseInt(prompt("ingrese la opcion deseada: / 1- Nivel facil / 2- Nivel Medio / 3- Nivel Dificil"))
    if(opcion === 1 || opcion === 2 || opcion ===3){
        switch (opcion) {
            case 1:
                console.log("Nivel Facil");
                pruebasuma();
                pruebasuma();
                pruebasuma();
                nota();
                break;
            case 2:
                console.log("Nivel Medio");
                pruebasuma();
                pruebaresta();
                pruebasuma();
                pruebaresta();
                nota();
                break;
            case 3:
                console.log("Nivel Dificil");
                pruebasuma();
                pruebaresta();
                pruebadivision();
                nota();
                break;
            default:
                console.log("Opción no válida");
        }
        break;   
    } else {
        console.log("otra oportunidad");
    }
}

