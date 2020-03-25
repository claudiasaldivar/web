$(document).ready(function() {
  $('#ejecutar').on('click', function() {
      $('.caja').animate({
        marginLeft: '500px'
      },3000);

        $('.caja').animate({
            marginLeft: '0px'
          },3000);
  });

  $('#parar').on('click', function(){
      $('.caja').stop(false, true);
  });
});
