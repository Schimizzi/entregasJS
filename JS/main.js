 // Función para generar números aleatorios entre 1 y 10
 function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

// Función para crear una fila de ejercicio
function crearFilaEjercicio() {
    var fila = document.createElement('div');
    fila.classList.add('fila-ejercicio');

    var num1 = generarNumeroAleatorio();
    var num2 = generarNumeroAleatorio();

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
    var filasEjercicio = document.querySelectorAll('.fila-ejercicio');
    var resultadosCorrectos = 0;
    var resultadosIncorrectos = 0;

    filasEjercicio.forEach(function(fila) {
        var respuestaUsuario = parseInt(fila.querySelector('.respuesta').value);
        var num1 = parseInt(fila.querySelector('label:nth-child(1)').textContent);
        var num2 = parseInt(fila.querySelector('label:nth-child(2)').textContent.split(' ')[1]);
        var sumaCorrecta = num1 + num2;

        if (respuestaUsuario === sumaCorrecta) {
            resultadosCorrectos++;
        } else {
            resultadosIncorrectos++;
        }
    });

    // Mostrar resultados
    var correctosElemento = document.getElementById('correctos');
    var incorrectosElemento = document.getElementById('incorrectos');

    correctosElemento.textContent = 'Correctos: ' + resultadosCorrectos;
    incorrectosElemento.textContent = 'Incorrectos: ' + resultadosIncorrectos;
}

// Inicializar 5 filas de ejercicios al cargar la página
window.onload = function() {
    for (var i = 0; i < 5; i++) {
        crearFilaEjercicio();
    }
};


