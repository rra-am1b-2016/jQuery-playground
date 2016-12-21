$(document).ready(function(){
   var namesPersons = ["Bert", "Henk", "Bas", "Nico", "Sara", "Aidan", "Cornelis", "Marijn"];


   $("button").eq(0).click(function(){
      var index = Math.round(Math.random() * 7);
      $("ol").eq(0).prepend("<li><span></span>" + namesPersons[index] + "</li>");

   });

   $("ol").eq(0).mouseover(function(){
      prefix = "MBO Utrecht leerling: ";
      var spans = $("ol:first span");
      
      for ( var i = 0 ; i < spans.length; i++)
      {
          if ( spans.eq(i).text() == "")
          {
             spans.eq(i).append(prefix);
          }
      }     
   });

   var namesFruit = ["Appel", "Kiwi", "Banaan", "Mandarijn", "Peer", "Abrikoos", "Komkommer", "Watermeloen"];


   $("button").eq(1).click(function(){
      var index = Math.round(Math.random() * 7);
      var liNumber = $("input[type=number]").val();
      var olLength = $("ol:last li").length;
      $("input[type=number]").attr({"max": olLength + 1});
      $("ol:last li:nth-child(" + liNumber + ")").after("<li>" + namesFruit[index] + "</li>");

   });

});