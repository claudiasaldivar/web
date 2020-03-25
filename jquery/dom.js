$(document).ready(function() {

//Parent
  // $('#tercera').parent().css({
  //   background: '#1b3d82'
  // });

//Parents
//$('#tercera').parents();

//Children
// $('#padre').children().fadeOut(500);
//$('#padre').children('#tercera').fadeOut(500);

//Find
//$('#contenedor').find('div.caja').slideUp(900);

//siblings
//$('#tercera').siblings().fadeOut(3000);

//Next - Preview
$('#tercera').prevAll().css({
  background: '#000'
})

});
