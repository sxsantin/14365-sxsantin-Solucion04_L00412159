function guardarCambios() {
    // Validar campos en el formulario principal
    var nombreProducto = document.getElementById('nombreProducto').value;
    var descripcion = document.getElementById('descripcion').value;
  
    if (nombreProducto === '' || descripcion === '') {
      alert('Por favor, complete todos los campos en el formulario principal antes de guardar.');
      return;
    }
  
    // Resto de la lógica para guardar los datos
    alert('Datos guardados correctamente.');
  }
  
  function borrarDatos() {
    // Lógica para borrar los datos
    document.getElementById('formularioProducto').reset();
    document.getElementById('formularioConfidencial').classList.add('hidden');
    alert('Datos borrados.');
  }
  
  document.getElementById('infoConfidencial').addEventListener('change', function() {
    var formularioConfidencial = document.getElementById('formularioConfidencial');
    formularioConfidencial.classList.toggle('hidden', !this.checked);
  });
  
  