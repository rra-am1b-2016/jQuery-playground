$(document).ready(function(){
   //alert("Hoi");

   $('button').eq(0).click(function(){
      $("div").animate({"left": "60%"}, 3000, "easeOutBounce", function(){
         $(this).animate({"top": "200px"}, 3000, "easeOutBounce", function(){
            $(this).animate({"left": "0%"}, 3000, "easeOutBounce", function(){
               $(this).animate({"top": "0px", "background-color": "black"}, 3000, "easeOutBounce");
            });       
         });
      });
   });

   $("button").eq(1).click(function(){
     // Hier komt code
     $("div").stop(false, true);
   });

   

   $("div").mouseenter(function(){
     // $(this).animate({"left": "80%"}, 3000, "easeInBounce");
   });
});