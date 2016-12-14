$(document).ready(function(){

   var transparency = 1;

   $("button").click(function(){
      $("div").fadeTo(1000, transparency, function(){
         if ( transparency > 0)
            transparency -= 0.1;
         else
            transparency = 1;
         $(this).text(transparency);
          $("button").click();
      });
   });
});