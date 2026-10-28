//  Selección de elementos principales
const formTarea = document.getElementById('formTarea');
const inputTarea = document.getElementById('inputTarea');
const listaTareas = document.getElementById('listaTareas');

// Agregar una nueva tarea
formTarea.addEventListener('submit', function(e) {
  e.preventDefault();

  const texto = inputTarea.value.trim();

  // Si el campo está vacío, no hacemos nada
  if (texto === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="texto-tarea">${texto}</span>
    <div class="acciones">
      <button class="btn-completar" title="Marcar como completada">✓</button>
      <button class="btn-eliminar" title="Eliminar tarea">🗑</button>
    </div>
  `;

  
  listaTareas.appendChild(li);

  // Limpiamos el input
  inputTarea.value = '';
});

//  UN SOLO listener en la lista <ul>
listaTareas.addEventListener('click', function(e) {
  // e.target nos dice exactamente qué elemento se presionó
  const elementoClickeado = e.target;

  //  Se hizo clic en el botón de completar "✓"
  if (elementoClickeado.classList.contains('btn-completar')) {
    // Buscamos el <li> contenedor más cercano y alternamos la clase 'completada'
    const liPadre = elementoClickeado.closest('li');
    liPadre.classList.toggle('completada');
  }

  // Se hizo clic en el botón de eliminar "🗑"
  if (elementoClickeado.classList.contains('btn-eliminar')) {
    // Buscamos el <li> contenedor más cercano y lo eliminamos
    const liPadre = elementoClickeado.closest('li');
    liPadre.remove();
  }
});

// Limpiar el campo con la tecla Escape
inputTarea.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    inputTarea.value = '';
  }
});