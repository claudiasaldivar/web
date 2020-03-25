$(document).ready(function() {

  $('#boton').on('click', function() {
      $('#caja').animate({
        //width: '300px',
        marginLeft: '+=20px',
        // opacity: '0.2'
      }, 3000, function() {
        //alert('Fin de la animacion');
      });
        //$('.caja').toggleClass('animacion');
      $('#caja').animate({
        marginLeft: '-=50px'
      },300);
  });
});
