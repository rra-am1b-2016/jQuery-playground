$(document).ready(function(){
   $("button").click(function(){
      $("tr:nth-child(odd)").addClass("oddRows");
   });
});