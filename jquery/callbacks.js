$(document).ready(function() {

  $('#ejecutar').on('click', function() {
    $('.caja').slideUp(3000, function(){
      $(this).slideDown(3000);
    });
  });
});
