$(document).ready(function() {

  $(window).scroll(function() {
    console.log(`Scroll position is: ${$(window).scrollTop()}`);
    if ($(window).scrollTop() >= 200) {
      $(".reading1").fadeIn(1000);
      } else {
      $(".reading1").fadeOut(1000);
    }

    if ($(window).scrollTop() >= 1080) {
      $(".reading2").fadeIn(1000);
       } else {
      $(".reading2").fadeOut(1000);
    }

    if ($(window).scrollTop() >= 1770) {
      $(".reading3").fadeIn(1000);
       } else {
      $(".reading3").fadeOut(1000);
    }

    if ($(window).scrollTop() >= 2500) {
      $(".reading4").fadeIn(1000);
       } else {
      $(".reading4").fadeOut(1000);
    }

  });
});
