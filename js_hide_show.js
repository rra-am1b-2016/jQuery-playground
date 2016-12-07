$(document).ready(function() {
   // Hier komt al je jQuery code
   var img = $("img");
       img.css({"width": "200px"});
   var text = $("h1");

   img.hide();
   text.hide();

   $("button").click(function() {
      img.show(3000, function() {   // Dit is een callback function
      text.show(3000, function() {
         $("button").eq(1)
                    .css({"display": "inline"})
                    .focus()
                    .click(function(){
                              img.toggle();
                              text.toggle();
                           });
      });
   });
   });

   

   
});

