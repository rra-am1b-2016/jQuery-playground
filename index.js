//alert("Hallo vanuit het js-bestand");

$(document).ready(function()
{
   // Hier komt al je jQuery

   // Dit heet chaining van methods
   $("p").css("background-color", "green")
         .css("border", "5px solid red");

   // Maak een javascript object....
   var cssObject = {
      "color": "white",
      "padding": "0.2em"
   };

   // en geef dit object mee aan de css-method
   $("p").css(cssObject);

   

   // Dit heet een anonieme functie
   $("#btn_01").click(function(){
      // Geef direct een object mee
      $("p").css({"font-size": "1.5em", "font-family": "Verdana"});
   });

   $("#btn_02").click(function(){
      $("p").hide();
   });

   $("#btn_02").dblclick(function(){
      $("p").show();
   });

   $("#btn_03").click(function(){
      $("p").show();
   });

   // Wanneer je op een van de tien p-tags clicked moet de border-width groter worden.
   $("p").click(function(){
      $("p").css({"background-color": "green"});   
      $(this).css({"background-color": "#ffaa11"});
      $("p").css({"border-width": "1em"});
   });




});
