$(document).ready(function(){
   // Maak een selector voor eerste button
   var btn = $('button');
   var img = $('img');

   btn.eq(0).click(function(){
      img.slideUp(4000, function(){
         btn.eq(0).attr({"disabled": "disabled"})
                  .css({"cursor": "not-allowed", "opacity": "0.6"});
      })
   });

   btn.eq(1).click(function(){
      img.slideDown(200, function(){
         btn.eq(0).removeAttr("disabled")
                  .css({"cursor": "default", "opacity": "1.0"});
      } );
   });

   btn.eq(2).click(function(){
      img.slideToggle(400);
   });


});