// 1. Selección de elementos del DOM
const textarea = document.getElementById('comentario');
const contador = document.getElementById('contador');
const btnPublicar = document.getElementById('btnPublicar');

const LIMITE_MAXIMO = 280;
const LIMITE_ADVERTENCIA = 250;

// evalúa y actualiza la interfaz
function actualizarContador() {
  // cantidad actual de caracteres ingresados
  const longitudActual = textarea.value.length;

  // Actualizael texto del contador 
  contador.textContent = `${longitudActual}/${LIMITE_MAXIMO}`;

  //  Evaluamos las condiciones
  if (longitudActual >= LIMITE_MAXIMO) {
    // Estado: Límite máximo alcanzado (280)
    contador.className = 'limite-rojo';
    btnPublicar.disabled = true;

  } else if (longitudActual >= LIMITE_ADVERTENCIA) {
    // Estado: Advertencia 
    contador.className = 'alerta-naranja';
    btnPublicar.disabled = false;

  } else {
    
    contador.className = '';
    btnPublicar.disabled = false;
  }
  // Acción al hacer clic en Publicar
  btnPublicar.addEventListener('click', function() {
  const textoIngresado = textarea.value.trim();
  
  if (textoIngresado.length > 0) {
    alert("¡Publicación exitosa: " + textoIngresado + "!");
    
    // Limpiamos el textarea y reiniciamos el contador
    textarea.value = '';
    actualizarContador(); 
  }
 });
}


textarea.addEventListener('input', actualizarContador);