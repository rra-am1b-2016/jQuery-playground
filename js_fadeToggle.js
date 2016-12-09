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
      img.fadeToggle(5000, function(){
                              var h3Tekst = $('h3').eq(1);
                              if (h3Tekst.text() == " om een mandarijn te zien")
                                  h3Tekst.text(" om mandarijnen te laten verdwijnen");
                              else
                                  h3Tekst.text(" om een mandarijn te zien");
                        });

   });

   

});