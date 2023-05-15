// Obtener el modo actual del almacenamiento local o establecer un valor predeterminado
var modoActual = localStorage.getItem('modo') || 'dia';

// Obtener el tamaño de fuente actual del almacenamiento local o establecer un valor predeterminado
var tamañoActual = localStorage.getItem('tamaño') || 'mediano';

// Función para cambiar el modo
function cambiarModo() {
  var selectModo = document.getElementById('modo');
  var nuevoModo = selectModo.value;

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

// Establecer el modo y tamaño actual en la carga de la página
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add(modoActual);
  document.body.classList.add(tamañoActual);

  var selectModo = document.getElementById('modo');
  selectModo.value = modoActual;

  var selectTamaño = document.getElementById('tamaño');
  selectTamaño.value = tamañoActual;
});