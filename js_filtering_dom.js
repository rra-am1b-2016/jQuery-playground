$(document).ready(function(){
   // Selecteer het eerste, het laatste en de vijfde listitem.

   var selection = $("ol").children();
   var jsObj = {"background-color": "oranje", "border": "3px solid black"}; 
   var jsObj2 = {"background-color": "green", "border": "3px solid black"}; 
   
   //selection.first().css(jsObj);
   //selection.last().css(jsObj);
   //selection.eq(5).css(jsObj);
   
   selection.filter(".test").css(jsObj);

   selection.not(".test").css(jsObj2);


   
   
});