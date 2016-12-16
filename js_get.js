$(document).ready(function(){
   $("button").eq(0).click(function(){
      var h3Element = $("h3");
      var text = h3Element.text();
      alert("Dit is de tekst in het h3 element: " + text);
      h3Element.text("Dit is de nieuwe tekst");

      var attributeValue = h3Element.attr("style");

      alert("Het style attribuut heeft de volgende waarde: " + attributeValue);

      h3Element.attr("style", "border: 20px solid blue");
   });

   $("button").eq(1).click(function(){
      $("img").attr({"src": "./images/mandarijn.jpg",
                     "alt": "mandarijn"});

   });   
});