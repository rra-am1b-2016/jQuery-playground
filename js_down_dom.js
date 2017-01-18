$(document).ready(function(){
   // Children gaan een level naar beneden
   /*
   $("ol").children().css({"background-color": "#66ff33",
                           "border": "2px solid black",
                           "margin": "2em"});
   */
   // Je maakt een subselectie door een selector-argument mee te geven
   $("ol").children("li:nth-child(4)").css({"background-color": "#66ff33",
                           "border": "2px solid black",
                           "margin": "2em"});

   $("ol").find("span").css({"font-size": "2em"});
});