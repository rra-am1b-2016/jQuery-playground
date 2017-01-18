$(document).ready(function(){
   //siblings (broertjes en zusjes)
   //$("li:nth-child(3)").siblings().css({"border": "5px solid grey"});

   // Het eerst volgende broertje krijgt een grijze rand
   //$("li:nth-child(3)").next().css({"border": "5px solid grey"});

   // Alle broerjes na de geselecteerde tag krijgt een grijze rand
   //$("li:nth-child(3)").nextAll().css({"border": "5px solid grey"});

   // Alle broerjes na de geselecteerde tag krijgt een grijze rand tot de selectie
   //$("li:nth-child(3)").nextUntil("li:nth-child(6)").css({"border": "5px solid grey"});

   
   // Het eerst achterliggende broertje krijgt een grijze rand
   //$("li:nth-child(3)").prev().css({"border": "5px solid grey"});

   // Alle broerjes voor de geselecteerde tag krijgt een grijze rand
   //$("li:nth-child(3)").prevAll().css({"border": "5px solid grey"});

   // Alle broerjes voor de geselecteerde tag krijgt een grijze rand tot en met de selectie
   $("li:nth-child(8)").prevUntil("li:nth-child(3)").css({"border": "5px solid grey"});

   
   

});