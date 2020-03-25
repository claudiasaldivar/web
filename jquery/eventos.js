$(document).ready(function(){

  var boton = $('#boton');
  // boton.click(function(){
  //   alert();
  // });
//EVENTO CON FUNCION
  // function saludo() {
  //   alert();
  // }
  //boton.click(saludo);
//boton.on('click', saludo);

//EVENTO CON CALLBACK
// boton.on('mouseenter', function() {
//   document.body.style.background = '#f9a03f'
// })
//
// boton.on('mouseleave', function() {
//   document.body.style.background = '#000'
// })

//ELIMINAR UN EVENTO
// boton.on('click', function() {
//   alert();
// });
//
// $('#desactivar').on('click', function() {
//     boton.off('click');
// });
// });

//Previniendo el comportamiento d elos enlaces
$('a').on('click', function(e) {
  e.preventDefault();
  alert('paguina en mantenimiento');
});
});
