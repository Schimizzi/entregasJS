//  CLASS
class Usuarios {
    constructor(nombre, dni, puntaje) {
        this.nombre = nombre;
        this.dni = dni;
        this.puntaje = puntaje
    }
    // mostrar en consola el nombre y puntaje del usuario
    podio() {
        console.log(usuariosExamen.nombreNuevo + "tu puntaje es: " + usuariosExamen.puntaje)
    }
}

// Función para mostrar los usuarios en el DOM, ordenados por puntaje
function mostrarUsuariosEnDOM() {
    const listaUsuarios = document.getElementById("lista-usuarios");
    listaUsuarios.innerHTML = "";

    // Ordenar usuarios por puntaje de forma descendente
    usuariosPodio.sort((a, b) => b.puntaje - a.puntaje);

    // Mostrar los primeros 10 usuarios en el DOM guardados en el local
    usuariosPodio.slice(0, 10).forEach(usuario => {
        const listItem = document.createElement("li");
        listItem.textContent = `${usuario.nombre} - Puntaje: ${usuario.puntaje}`;
        listaUsuarios.appendChild(listItem);
    });
}

// JSON ------

// Inicializar la lista de usuarios desde el almacenamiento local o crear una lista vacía
const usuariosPodio = JSON.parse(localStorage.getItem("usuariosPodio")) || [];

// Función para guardar la lista actualizada de usuarios en el almacenamiento local y actualizar el DOM
function guardarUsuariosEnLocalStorage() {
    localStorage.setItem("usuariosPodio", JSON.stringify(usuariosPodio));
    mostrarUsuariosEnDOM();
} 

let usuariosExamen = ""
// Contador de preguntas correctas
let notaFinal = 0;


function newUser() {
    let nombreNuevo = prompt("ingrese su nombre");
    let dniNuevo = parseInt(prompt("ingrese su DNI"));
    // Crear un nuevo usuario de examen y agregarlo a la lista
    usuariosExamen = new Usuarios(nombreNuevo, dniNuevo, i);
    usuariosPodio.push(usuariosExamen);
    // Mostrar con Toastify mensajes según la posición del usuario y su puntaje
    if(usuariosPodio.length === 1){
        Toastify({
            text: `El Primer lugar es para ${usuariosPodio[0].nombre} con un puntaje de ${usuariosPodio[0].puntaje}`,
            duration: 6000,
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
          text: `El Segundo lugar es para ${usuariosPodio[0].nombre} con un puntaje de ${usuariosPodio[0].puntaje}`,
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
            text: `El Primer lugar es para ${usuariosPodio[1].nombre} con un puntaje de ${usuariosPodio[1].puntaje}`,
            duration: 6000,
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
            duration: 4000,
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
            duration: 6000,
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


// Inicializar variable para preguntas y respuestas
let i = 0;

// Función para generar un número aleatorio en un rango dado
function NumberRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Lista de preguntas y respuestas para el examen
const preguntas = [
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
    { enunciado: '', respuestaCorrecta: '' },
];

// Variables para el control de preguntas y respuestas
let preguntaActual = 0;
let number, suma;

// Función para cargar una pregunta en el elemento correspondiente del DOM
function cargarPregunta(numero1, numero2) {
    const preguntaElemento = document.getElementById('pregunta');
    suma = numero1 + numero2;
    preguntas[preguntaActual].enunciado = `¿Cuánto es ${numero1} + ${numero2}?`;
    preguntaElemento.textContent = preguntas[preguntaActual].enunciado;
}

// Función para generar ejercicios numéricos y cargar la primera pregunta
function ejerciciosNumeros() {
    let num1 = NumberRandom(1, 10);
    let num2 = NumberRandom(1, 10);
    number = [num1, num2];
    cargarPregunta(num1, num2);
    return number;
}

// Configuración del evento onclick para el botón de verificación
document.getElementById('verificarButton').onclick = verificarRespuesta;
document.getElementById('pregunta-container').addEventListener('keyup', function (event) {
  // Verificar con la tecla Enter
  if (event.key === 'Enter') {
      verificarRespuesta();
  }
});

// Inicialización al cargar la ventana para obtener la primera pregunta
window.onload = () => {
    number = ejerciciosNumeros();
};

// Función para verificar la respuesta del usuario
function verificarRespuesta() {
    const respuestaUsuario = parseInt(document.getElementById('respuesta').value);
    const resultadoElemento = document.getElementById('resultado');
    
    // Verificar si la respuesta del usuario es correcta
    if (respuestaUsuario === suma) {
        resultadoElemento.textContent = '¡Correcto!';
        i++;

    } else {
        resultadoElemento.textContent = 'Incorrecto. La respuesta correcta es: ' + suma;
    }

    preguntaActual++;

    // Verificar condiciones para mostrar mensajes segun puntaje
    if (preguntaActual < preguntas.length) {
        ejerciciosNumeros();
    } else if ((preguntaActual <= preguntas.length) && (i === 10)) {
        resultadoElemento.innerHTML = Swal.fire({
            title: `Obtuvo un ${i}<br>  Máxima Puntución!`,
            showDenyButton: true,
            confirmButtonText: 'Registrese',
          }).then((result) => {
            if (result.isConfirmed) {
                newUser();
            } else if (result.isDenied) {
                newUser();
            }
          });

    } else if ((preguntaActual <= preguntas.length) && (i >= 7) && (i <= 9)) {
        resultadoElemento.textContent = Swal.fire({
            title: 'Examen Finalizado.<br> ¡Buen trabajo!',
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
            title: `Obtuvo un ${i}<br> Ha reprobado el examen`,
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
    document.getElementById('respuesta').value = '';
}

