// 1. Selección de elementos
const inputPassword = document.getElementById('password');
const btnToggle = document.getElementById('btnToggle');
const formRegistro = document.getElementById('formRegistro');
const mensajeExito = document.getElementById('mensajeExito');

//  lista de requisitos
const reqLongitud = document.getElementById('req-longitud');
const reqMayuscula = document.getElementById('req-mayuscula');
const reqNumero = document.getElementById('req-numero');

// 2. Funcionalidad del botón
btnToggle.addEventListener('click', function() {
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text';
    btnToggle.textContent = '👁 Ocultar';
  } else {
    inputPassword.type = 'password';
    btnToggle.textContent = '👁 Mostrar';
  }
});

// control de validez
let esValidoLongitud = false;
let esValidoMayuscula = false;
let esValidoNumero = false;

// Validación mientras el usuario escribe
inputPassword.addEventListener('input', function() {
  const valor = inputPassword.value;

  // Validación mínimo 8 caracteres
  if (valor.length >= 8) {
    reqLongitud.className = 'valido';
    esValidoLongitud = true;
  } else {
    reqLongitud.className = 'invalido';
    esValidoLongitud = false;
  }

  // Validación al menos una letra mayúscula 
  if (/[A-Z]/.test(valor)) {
    reqMayuscula.className = 'valido';
    esValidoMayuscula = true;
  } else {
    reqMayuscula.className = 'invalido';
    esValidoMayuscula = false;
  }

  // Validación al menos un número 
  if (/[0-9]/.test(valor)) {
    reqNumero.className = 'valido';
    esValidoNumero = true;
  } else {
    reqNumero.className = 'invalido';
    esValidoNumero = false;
  }
});

//  Control del envío.
formRegistro.addEventListener('submit', function(e) {
  // Evitamos que la página se recargue por defecto
  e.preventDefault();

  // Verificamos si los 3 requisitos son verdaderos
  if (esValidoLongitud && esValidoMayuscula && esValidoNumero) {
    mensajeExito.classList.remove('oculto');
    formRegistro.reset(); // Opcional: limpia el formulario
    
    // Reseteamos los indicadores visuales
    reqLongitud.className = 'invalido';
    reqMayuscula.className = 'invalido';
    reqNumero.className = 'invalido';
  } else {
    alert('Por favor, cumple con todos los requisitos de seguridad antes de enviar.');
  }
});