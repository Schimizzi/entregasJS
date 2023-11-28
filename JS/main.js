
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

// JSON ------


const usuariosPodio = JSON.parse(localStorage.getItem("usuariosPodio")) || [];


function guardarUsuariosEnLocalStorage() {
    localStorage.setItem("usuariosPodio", JSON.stringify(usuariosPodio));
    mostrarUsuariosEnDOM();
} 

let usuariosExamen = ""
let notaFinal = 0;

function newUser() {
    let nombreNuevo = prompt("ingrese su nombre");
    let dniNuevo = parseInt(prompt("ingrese su DNI"));
    usuariosExamen = new Usuarios(nombreNuevo, dniNuevo, i);
    usuariosPodio.push(usuariosExamen);

    if(usuariosPodio.length === 1){
        Toastify({
            text: `El Primer lugar es para ${usuariosPodio[0].nombre} con un puntaje de ${usuariosPodio[0].puntaje}`,
            duration: 5000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        guardarUsuariosEnLocalStorage();
    }else if(usuariosPodio.length === 2){
        usuariosPodio.sort((a, b) => a.puntaje - b.puntaje);
        Toastify({
            text: `El Primer lugar es para ${usuariosPodio[0].nombre} con un puntaje de ${usuariosPodio[0].puntaje}`,
            duration: 5000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
          Toastify({
            text: `El Segundo lugar es para ${usuariosPodio[1].nombre} con un puntaje de ${usuariosPodio[1].puntaje}`,
            duration: 5000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        guardarUsuariosEnLocalStorage();
    }else{
        usuariosPodio.sort((a, b) => a.puntaje - b.puntaje);
        guardarUsuariosEnLocalStorage();
        Toastify({
            text: `El Tercer lugar es para ${usuariosPodio[2].nombre} con un puntaje de ${usuariosPodio[2].puntaje}`,
            duration: 5000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();

          Toastify({
            text: `El Segundo lugar es para ${usuariosPodio[1].nombre} con un puntaje de ${usuariosPodio[1].puntaje}`,
            duration: 5000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
          Toastify({
            text: `El Primer lugar es para ${usuariosPodio[0].nombre} con un puntaje de ${usuariosPodio[0].puntaje}`,
            duration: 5000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();

    }
}


//---------
let i = 0;
// Funciones
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const preguntas = [
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
];

let preguntaActual = 0;
let number, suma;

function cargarPregunta(numero1, numero2) {
    const preguntaElemento = document.getElementById('pregunta');
    suma = numero1 + numero2;
    preguntas[preguntaActual].enunciado = `¿Cuánto es ${numero1} + ${numero2}?`;
    preguntaElemento.textContent = preguntas[preguntaActual].enunciado;
}

function ejerciciosNumeros() {
    let num1 = getRandomNumber(1, 10);
    let num2 = getRandomNumber(1, 10);
    number = [num1, num2];
    cargarPregunta(num1, num2);
    return number;
}

// onclick del botón
document.getElementById('verificarButton').onclick = verificarRespuesta;

// Inicialización
window.onload = () => {
    number = ejerciciosNumeros();
};

function verificarRespuesta() {
    const respuestaUsuario = parseInt(document.getElementById('respuesta').value);
    const resultadoElemento = document.getElementById('resultado');
    if (respuestaUsuario === suma) {
        resultadoElemento.textContent = '¡Correcto!';
        i++;
        console.log('puntos obtenidos:', i * 2);

    } else {
        resultadoElemento.textContent = 'Incorrecto. La respuesta correcta es: ' + suma;
    }

    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        ejerciciosNumeros();
    } else if ((preguntaActual <= preguntas.length) && (i === 5)) {
        resultadoElemento.innerHTML = Swal.fire({
            title: `Obtuvo un ${i * 2}<br>  Uds ha aprobado el examen`,
            showDenyButton: true,
            confirmButtonText: 'Registrese',
          }).then((result) => {
            if (result.isConfirmed) {
                newUser();
            } else if (result.isDenied) {
                newUser();
            }
          });

    } else if ((preguntaActual <= preguntas.length) && (respuestaUsuario === suma)) {
        resultadoElemento.textContent = Swal.fire({
            title: 'Examen Finalizado. ¡Buen trabajo!',
            showDenyButton: true,
            confirmButtonText: 'Registrese',
          }).then((result) => {
            if (result.isConfirmed) {
                newUser();
            } else if (result.isDenied) {
                newUser();
            }
          });

    } else if ((preguntaActual <= preguntas.length) && (i < 3)) {
        resultadoElemento.textContent = Swal.fire({
            title: `Obtuvo un ${i * 2}, ha reprobado el examen`,
            showDenyButton: true,
            confirmButtonText: 'Registrese',
          }).then((result) => {
            if (result.isConfirmed) {
                newUser();
            } else if (result.isDenied) {
                newUser();
            }
          });

    } else {
        resultadoElemento.textContent = Swal.fire({
            title: `Respuesta incorrecta <br> Uds ha aprobado el examen.`,
            showDenyButton: true,
            confirmButtonText: 'Registrese',
          }).then((result) => {
            if (result.isConfirmed) {
                newUser();
            } else if (result.isDenied) {
                newUser();
            }
          });
        ;
        
    }
}
