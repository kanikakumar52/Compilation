$(document).ready(function() {

console.log("hello world");

  // $(".project1").hover(function(){
  //   $(".describe1").fadeIn();
  //   }, function(){
  //   $(".describe1").fadeOut();
  // });
  $(".project1").hover(function(){
    $(".describe1").fadeIn();
    $(".label1").hide(10);
  });

  $(".project2").hover(function(){
    $(".describe2").fadeIn();
    $(".label2").hide(10);
  });

  $(".project3").hover(function(){
    $(".describe3").fadeIn();
    $(".label3").hide(10);
  });

  $(".project4").hover(function(){
    $(".describe4").fadeIn();
    $(".label4").hide(10);
  });

  $(".label1").hover(function(){
  	$(".label1").slideToggle();
  });

  $(".label2").hover(function(){
  	$(".label2").slideToggle();
  });

  $(".label3").hover(function(){
  	$(".label3").slideToggle();
  });

  $(".label4").hover(function(){
  	$(".label4").slideToggle();
  });

});

