$(document).ready(function() {

console.log("hello world");

	$(function() {
		$(".movie1click").click(function() {
			$(".movie1graph").slideDown();
			$(".movie1click").fadeOut(10);
		});
		$(".movie1close").click(function() {
			$(".movie1graph").slideUp();
			$(".movie1click").fadeIn(10);
		});
	});

 	$(function() {
		$(".movie2click").click(function() {
			$(".movie2graph").slideDown();
			$(".movie2click").fadeOut(10);
		});
		$(".movie2close").click(function() {
			$(".movie2graph").slideUp();
			$(".movie2click").fadeIn(10);
		});
	});

	$(function() {
		$(".movie3click").click(function() {
			$(".movie3graph").slideDown();
			$(".movie3click").fadeOut(10);
		});
		$(".movie3close").click(function() {
			$(".movie3graph").slideUp();
			$(".movie3click").fadeIn(10);
		});
	});  

});