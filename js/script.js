$(document).ready(function() {

	$(".menu-puller").click(function(){
		console.log("ola");
		$("html, body").animate({ scrollTop: $(document).height() }, 1000);
	});

	$(".logo").click(function() {
		$("#home").show();
		$("#farm").hide();
		$("html, body").scrollTop(0);
	});

	$(".farm-link").click(function() {
		$("#home").hide();
		$("#farm").show();
		$("html, body").scrollTop(0);
	});

});
