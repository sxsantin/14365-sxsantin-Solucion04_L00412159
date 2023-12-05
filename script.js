function desmarcar(id) {
    document.getElementById(id).checked = false;
  }
  
  function toggleFormularioTerceros() {
    var formularioTerceros = document.getElementById("formularioTerceros");
    formularioTerceros.classList.toggle("hidden");
  }
  
  function toggleEnvioDatos() {
    var enviarDatosBtn = document.getElementById("enviarDatos");
    var entregaPropietarioCheckbox = document.getElementById("entregaPropietario");
    var entregaTercerosCheckbox = document.getElementById("entregaTerceros");
  
    if (entregaPropietarioCheckbox.checked || (entregaTercerosCheckbox.checked && !document.getElementById("formularioTerceros").classList.contains("hidden"))) {
      enviarDatosBtn.disabled = false;
    } else {
      enviarDatosBtn.disabled = true;
    }
  }
  