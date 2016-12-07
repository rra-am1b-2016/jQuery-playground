// Maak een document ready
// Maak 3 div's naast elkaar
//Plaats css erop 
// Maak een knop, als je op de knop drukt dan moet de .fadeIn() action getriggerd worden

$(document).ready(function(){
   var dimension = 100;

   cssObj = {
      "border": "3px solid red",
      "height": dimension + "px",
      "width": dimension + "px",
      "background-color": "yellow",
      "display": "inline-block",
      "margin": "5px",
      "font-size": "5em",
      "text-align": "center",
      "font-family": "Verdana",
      "color": "green"
   };


   $("div").css(cssObj);

   var time = 700;
   $("button").click(function(){
      $("div").eq(2).fadeOut(time, function(){
         $("div").eq(1).fadeOut(time, function(){
            $("div").eq(0).fadeOut(time, function() {
               $("div").fadeIn(1000, function() {
                  $("button").click();
               });
            });
         });
      });
   });



});