$(document).ready(function() {
   
   var cssPropertiesLink = {
      "color": "green",
      "text-decoration": "underline"
   };

   var cssPropertiesImg = {
      "display": "none"
   };


   var img = $('img');

   $('span').css(cssPropertiesLink).click(function(){
      //alert("Ik ben een soort button");
      img.fadeToggle(5000, test);

   });

   function test()
   {
      alert("Dit is de functie test");
   }

});