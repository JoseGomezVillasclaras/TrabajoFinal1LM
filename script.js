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
  var nuevoTamaño = select;
}
