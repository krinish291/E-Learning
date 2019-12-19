$(document).ready(function(){
    $("#showlink").click(function(){
      $("#hiddencourses").slideToggle(2000);
      $("div").find("#s1").toggleClass("glyphicon glyphicon-chevron-down");
      $("div").find("#s2").toggleClass("glyphicon glyphicon-chevron-up");
          $("div").find("#s1 > p").text("Explore Less");
    });
  });