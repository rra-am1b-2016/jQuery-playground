$(document).ready(function(){
   // Hier komt je jQuery code...
   // We hebben het click en dblclick event gehad dan nu het hover event
   // Maak een vierkante div met een gele achtergrond en een groene border.
   // Regel deze css met jQuery

   var cssObj = {
      "background-color": "yellow",
      "width": "100px",
      "height": "100px",
      "border": "5px solid green",
      "margin-bottom": "2em"
   };

   var color = "";
   $("div").css(cssObj).hover(function() {
      color = $(this).css("background-color");
      $(this).css({"background-color": "pink"});
   }, function() {
      $(this).css({"background-color": color});
   });

   

   

// Maak met behulp van mouseenter een div die je terugstuurt naar de index.pagina als je erop
// gaat staan.

   $("div").eq(1).mouseenter(function(){
      alert(window.history.length);
      window.history.go(-1);
   });

   $("div").eq(2).mouseleave(function(){
      // Naar nieuwe pagina gaan
      //window.location.href = "http://nu.nl";
      // Open een pagina in een nieuwe tab
      // http://stackoverflow.com/questions/14879585/how-to-open-a-new-browser-window-on-click-using-jquery-ui-dialog-box
      window.open("http://nu.nl", "_blank", 'width=400,height=200');
   });

   $("input").keypress(function(event){
         console.debug(event.which);
         if ( event.which == 107)
         {
            alert("Ik zei nog zo niet de k. Nu is alles weg!");
            $(this).val("");
         }
   }).focus(function(){
      $(this).css({"background-color": "yellow"});
   }).blur(function(){
      $(this).css({"background-color": "white"});
      
   });
});