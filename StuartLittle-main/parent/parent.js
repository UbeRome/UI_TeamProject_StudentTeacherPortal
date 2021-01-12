$(document).ready( function(){

   $("#artBtn").on("click", function(e){
         $("#subject").text("Art");
         $(".noteBox").css("display", "block");
         $(".noteContant").css("background", "lightgreen");
         $("#comment1").text("Nice communication skills");
         $("#comment2").text("Drawings were really cute");
   });
   $("#mathBtn").on("click", function(e){
         $("#subject").text("Math");
         $(".noteBox").css("display", "block");
         $(".noteContant").css("background", "lightgreen");
         $("#comment1").text("Gave correct answer multiple times.");
         $("#comment2").text("First to get full points on a Test 1.");
   });
   $("#SciBtn").on("click", function(e){
         $("#subject").text("Science");
         $(".noteBox").css("display", "block");
         $(".noteContant").css("background", "yellow");
         $("#comment1").text("Saw using phone during lecture.");
         $("#comment2").text("Nice knowledge about Solar System.");
   });
   $("#histBtn").on("click", function(e){
         $("#subject").text("History");
         $(".noteBox").css("display", "block");
         $(".noteContant").css("background", "lightgreen");
         $("#comment1").text("Heavy knowledge about Civil War.");
         $("#comment2").text("Makes good jokes!");
   });
   $("#readBtn").on("click", function(e){
         $("#subject").text("Reading");
         $(".noteBox").css("display", "block");
         $(".noteContant").css("background", "rgb(250,128,114)");
         $("#comment2").text("Didn't do his homework.");
         $("#comment1").text("Caught sleeping during lecture.");
   });


   $("#day13").on("click", function(e){
         $("#subject").text("Tuesday");
         $(".noteBox").css("display", "block");
         $(".noteContant").css("background", "lightblue");
         $("#comment1").text("Reading: Read chapter 2-8 from The Catcher in the Rye");
         $("#comment2").text(" ");
   });

   $("#day14").on("click", function(e){
         $("#subject").text("Wednesday");
         $(".noteBox").css("display", "block");
         $(".noteContant").css("background", "lightblue");
         $("#comment1").text("Math: Read chapter 1 Introduction to Trigonometry");
         $("#comment2").text(" ");
   });

   $("#day16").on("click", function(e){
         $("#subject").text("Friday");
         $(".noteBox").css("display", "block");
         $(".noteContant").css("background", "lightblue");
         $("#comment1").text("Math: Problem sets 2-6");
         $("#comment2").text("History: Learn about any 3 Presidents");
   });

   $("#day19").on("click", function(e){
         $("#subject").text("Monday");
         $(".noteBox").css("display", "block");
         $(".noteContant").css("background", "lightblue");
         $("#comment1").text("Art: Draw Yourself");
         $("#comment2").text("Math: Quiz 2");
   });

   $("#day26").on("click", function(e){
         $("#subject").text("Monday");
         $(".noteBox").css("display", "block");
         $(".noteContant").css("background", "lightblue");
         $("#comment1").text("Science: Watch Bill Nye the Science guy");
         $("#comment2").text("Math: Test 2 review.");
   });

   $("#exit").on("click", function(e){
         $(".noteBox").css("display", "none");
         $("#comment1").text("Nice communication skills");
         $("#comment2").text("Drawings were really cute");
   });

});
