$(document).ready(function(){
   //alert("Hoi");

   $('button').click(function(){
      $("div").animate({"left": "60%"}, 3000, "easeInBounce", function(){
         $(this).animate({"top": "200px"}, 3000, "easeInBounce", function(){
            $(this).animate({"left": "0%"}, 3000, "easeInBounce");       
         });
      });
   });

   $("div").mouseenter(function(){
     // $(this).animate({"left": "80%"}, 3000, "easeInBounce");
   });
});