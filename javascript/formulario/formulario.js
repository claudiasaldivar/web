(function {
var formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    correo = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById('error');

    function validarNombre(e) {
      if(nombre.value.length == '' || nombre.value.length == null){
        console.log('Ingresa un nombre');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el nombre</li>';
        e.preventDefault();
      }else{
        error.style.display = 'none';
      }
    }

    function validarCorreo(e) {
      if(correo.value.length == '' || correo.value.length == null){
        console.log('Ingresa un correo');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el correo</li>';
        e.preventDefault();
      }else{
        error.style.display = 'none';
      }
    }

    function validarSexo(e) {
      if(sexo.value.length == '' || sexo.value.length == null) {
        console.log('Ingresa un sexo');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el sexo</li>';
        e.preventDefault();
      }else{
        error.style.display = 'none';
      }
    }

    function validarTerminos(e) {
      if(terminos.checked == false) {
        console.log('Ingresa un terminos');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el terminos</li>';
        e.preventDefault();
      }else{
        error.style.display = 'none';
      }
    }

    function validarFormulario(e){
      error.innerHTML = '';
      validarNombre(e);
      validarCorreo(e);
      validarSexo(e);
      validarTerminos(e);
    }
    formulario.addEventListener('submit',validarFormulario);
}())
