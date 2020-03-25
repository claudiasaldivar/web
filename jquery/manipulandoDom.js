$(document).ready(function() {
  //$('#titulo').text('Encabezado modificado');

  //$('#titulo').html('<u>Encabezado modificado</u>')

  var nombre = $('#nombre');
  nombre.on('change', function() {
    $('#titulo').text(nombre.val());
  });
  $('#enlace').text('Enlace nuevo');
  $('#enlace').attr('href','https://www.facebook.com');
  $('#enlace').attr({
    class: 'azul',
    target: '_blank'
  });
});
