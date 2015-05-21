$(window).load( function() {
	$("body").fadeIn(2000);
});

$(window).unload( function() {
	//$("html").fadeOut(5000);
	//TODO
});

$(document).ready(function() {

	$(".menu-puller").click(function(){
		console.log("ola");
		$("html, body").animate({ scrollTop: $(document).height() }, 2000);
	});

	$(".toggle-nav").click(function() {
		$(".nav-menu").slideToggle("slow")
	})



});
