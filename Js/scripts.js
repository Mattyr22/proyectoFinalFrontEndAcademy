// Dark Mode

// El evento 'DOMContentLoaded' se dispara cuando se ha cargado todo el contenido de la página
document.addEventListener('DOMContentLoaded', darkMode);

// La función darkMode implementa el modo oscuro
function darkMode() {
  // Se obtiene la variable de estilo '--color1', '--color2', '--color3', '--color4' y '--color5' del elemento raíz (root)
  const root = document.documentElement;

  // Se obtiene el botón de modo oscuro
  const botonDarkMode = document.querySelector('.dark-mode-boton');

  // Se inicializa la variable 'modoBlanco' como false. Esta variable se utilizará para determinar si el modo oscuro está activado o no.
  let modoBlanco = false;

  // Se agrega un evento de 'click' al botón de modo oscuro
  botonDarkMode.addEventListener('click', function () {
    // Se agrega o se quita la clase 'dark-mode' del elemento 'body' dependiendo del estado actual del modo oscuro.
    document.body.classList.toggle('dark-mode');

    // Se actualiza el valor de la variable 'modoBlanco' para reflejar el estado actual del modo oscuro
    modoBlanco = !modoBlanco;

    // Se obtienen todos los elementos SVG con la clase 'svg-negro'
    const svgsNegros = document.querySelectorAll('.svg-negro');

    // Se recorre cada elemento SVG y se cambia el color de trazo (stroke) a blanco o negro según el estado actual del modo oscuro
    svgsNegros.forEach(svg => {
      if (modoBlanco) {
        svg.style.stroke = "#ececec";
      } else {
        svg.style.stroke = "#252525";
      }
    });
  });

  // Se establecen algunas variables CSS personalizadas en el elemento raíz (root) para ser utilizadas en la hoja de estilos.
  root.style.setProperty('--color1', '#252525');
  root.style.setProperty('--color2', '#cca4a1');
  root.style.setProperty('--color3', '#ddbdb9');
  root.style.setProperty('--color4', '#eed5d2');
  root.style.setProperty('--color5', '#ffeeea');
  root.style.setProperty('--sombra', 'rgba(37,37,37,0.5)');
}







// Formulario


// Obtener referencia al formulario
const formulario = document.querySelector('.formulario');

// Obtener referencia a los campos
const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

// Agregar evento submit al formulario
formulario.addEventListener('submit', function(event) {
  let mensajeError = '';

  // Verificar si cada campo tiene un valor
  if (nombre.value === '') {
    mensajeError += 'Por favor, ingrese su nombre.\n';
  }

  if (telefono.value === '') {
    mensajeError += 'Por favor, ingrese su teléfono.\n';
  }

  if (correo.value === '') {
    mensajeError += 'Por favor, ingrese su correo electrónico.\n';
  }

  if (mensaje.value === '') {
    mensajeError += 'Por favor, ingrese un mensaje.\n';
  }

   // Si todos los campos están vacíos, mostrar mensaje de error
   if (nombre.value.trim() === '' && telefono.value.trim() === '' && correo.value.trim() === '' && mensaje.value.trim() === '') {
    mensajeError = 'TODOS LOS CAMPOS SON OBLIGATORIOS.\n';
  }

  // Si algún campo está vacío, evitar que se envíe el formulario y mostrar la alerta
  if (mensajeError !== '') {
    event.preventDefault();
    alert(mensajeError);
  }
});