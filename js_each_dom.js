$(document).ready(function(){
   $("li").each(function(){
      if ($(this).text() == "Geel")
      {
         $(this).css({"background-color": "yellow"});
      }
   });


   // Slice method
   $("li").slice(4, 8).css({"border": "4px solid orange"});
   
   
});