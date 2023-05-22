// Obtener el modo actual del almacenamiento local o establecer un valor predeterminado
var modoActual = localStorage.getItem('modo') || 'dia';

// Obtener el tamaño de fuente actual del almacenamiento local o establecer un valor predeterminado
var tamañoActual = localStorage.getItem('tamaño') || 'mediano';

// Función para generar colores aleatorios
function generarColorAleatorio() {
  var letras = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }

  return color;
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Función para cambiar el modo
function cambiarModo() {
  var selectModo = document.getElementById('modo');
  var nuevoModo = selectModo.value;

  if (nuevoModo === 'random') {
    var colorTexto = generarColorAleatorio();
    var colorFondo = generarColorAleatorio();

    document.body.style.color = colorTexto;
    document.body.style.backgroundColor = colorFondo;
  } else {
    document.body.style.color = '';
    document.body.style.backgroundColor = '';
  }

  document.body.classList.remove(modoActual);
  document.body.classList.add(nuevoModo);

  localStorage.setItem('modo', nuevoModo);
  modoActual = nuevoModo;
}

// Función para cambiar el tamaño de fuente
function cambiarTamaño() {
  var selectTamaño = document.getElementById('tamaño');
  var nuevoTamaño = selectTamaño.value;

  document.body.classList.remove(tamañoActual);
  document.body.classList.add(nuevoTamaño);

  localStorage.setItem('tamaño', nuevoTamaño);
  tamañoActual = nuevoTamaño;
}
function guardarUsuario() {
  var texto = document.getElementById("textoInput").value;
  var usuario=sessionStorage.setItem("textoGuardado", texto);
  alert("Nombre de usuario Guardado.");
}

// Establecer el modo y tamaño actual en la carga de la página
document.addEventListener('DOMContentLoaded', function() {
  if (modoActual === 'random') {
    cambiarModo(); // Generar colores aleatorios al cargar la página si el modo es "Random"
  } else {
    document.body.classList.add(modoActual);
  }

  document.body.classList.add(tamañoActual);

  var selectModo = document.getElementById('modo');
  selectModo.value = modoActual;

  var selectTamaño = document.getElementById('tamaño');
  selectTamaño.value = tamañoActual;
});
sesionStorage