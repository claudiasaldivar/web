$(document).ready(function() {

   //$('.caja').first().css({background: '#000'});
   //$('.caja').last().css({background: '#000'});

   //Selecciona las cajas como si estuvieran en un arreglo
   //$('.caja').eq(1).css({background: '#000'})

   //Puedes seleccionar mas cajas que pertenezcan a una misma clase
   // $('.caja').filter('#segunda').css({background: '#f9a03f'})

   $('.caja').not('#segunda').css({background: '#f9a03f'})
})
