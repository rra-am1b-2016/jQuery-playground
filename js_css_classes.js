$(document).ready(function(){
   $("button").eq(0).click(function(){
      $("tr:nth-child(odd)").addClass("oddRows");
   });
   
   $("button").eq(1).click(function(){
      $("tr:nth-child(odd)").removeClass("oddRows");
   });

   $("button").eq(2).click(function(){
      $("tr:nth-child(odd)").toggleClass("oddRows");
   });

   var choose = "off";
   var id;
   $("button").eq(3).click(function(){
      if (choose == "off")
      {
         id = window.setInterval(autoToggle, 1000);
         choose = "on";
      }
      else if (choose == "on" )
      {
         clearInterval(id);
         choose = "off";
      }
   });
   
   

   function autoToggle(){
      $("button").eq(2).click();
   }


});