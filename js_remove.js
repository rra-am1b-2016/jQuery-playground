$(document).ready(function(){
   /*
   var popArtistsDied = ["David Bowie", "Prince", "George Michael", "Leonard Cohen",
                         "Toots Thielemans", "Muhammad Ali", "John Berry", "George Martin",
                         "Eddy Wally", "Vanity 6", "Robert Stigwood", "Glen Frey"];
   */
   var popArtistsDied = [{"name": "David Bowie", "photoName": "David Bowie.jpg"},
                         {"name": "Prince", "photoName": "Prince.jpg"},
                         {"name": "George Michael", "photoName": "george-michael.png"},
                         {"name": "Leonard Cohen", "photoName": "Leonard Cohen.jpg"},
                         {"name": "Toots Thielemans", "photoName": "Toots Thielemans.jpg"},
                         {"name": "Muhammad Ali", "photoName": "Muhammad Ali.jpg"},
                         {"name": "John Berry", "photoName": "David Bowie.jpg"},
                         {"name": "George Martin", "photoName": "David Bowie.jpg"},
                         {"name": "Eddy Wally", "photoName": "David Bowie.jpg"},
                         {"name": "Vanity 6", "photoName": "David Bowie.jpg"},
                         {"name": "Robert Stigwood", "photoName": "David Bowie.jpg"},
                         {"name": "Glen Frey", "photoName": "David Bowie.jpg"}];

   $("button").click(function(){

      // Haal alle oude overleden artisten eerst weg
      $("ol").empty();


      for ( var i = 0; i < 20; i++)
      {
         var index = Math.random() * popArtistsDied.length;
         index = Math.floor(index);

         $("ol").append("<li><span>" + popArtistsDied[index].name + "</span></li>");
         $("li:last span").click(function(){
            $(this).parent().remove();
         }).mouseenter(function(){
            $(this).css({"cursor": "pointer", "background-color": "grey"});
            // Selector maken voor je img tag
            // attr src
            // 
            artistName = $(this).text();

            var test = popArtistsDied.find(function(artist){
               return artist.name === artistName;
            });
            $("img").attr({"src": "./images/" + test.photoName,
                           "alt": test.name});


         }).mouseleave(function(){
            $(this).css({"cursor": "pointer", "background-color": "white"});
         });
         
      }      
   });

   
   
   

   //alert("Gelukkig 2017!" + popArtistsDied.length);
});

