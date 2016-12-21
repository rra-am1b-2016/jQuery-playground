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
      if ( $("img").attr("alt") == "sla")
      {
         $("img").attr({"src": "./images/mandarijn.jpg",
                        "alt": "mandarijn"});
         $("button").eq(1).html("Laat de krop <u>sla</u> zien!");
      }
      else if ($("img").attr("alt") == "mandarijn")
      {
         $("img").attr({"src": "./images/sla.jpg",
                        "alt": "sla"});
         $("button").eq(1).html("Laat de <u>mandarijn</u> zien!");
         
      }
   });

   $("input").change(function(){
      var tekst = $(this).val();
      $("ol").html("<li>" + tekst + "</li>");
      $(this).val("");
      $(this).attr("type", "password");
   });   
});