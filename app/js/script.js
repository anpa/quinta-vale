//FADE IN
$(window).load( function() {
	$("body").fadeIn(2000);
});

//FADE OUT
$('.transition').click(function(event){
	// Don't go to the next page yet.
	event.preventDefault();
	linkLocation = this.href;
	// Fade out this page first.
	$('body').fadeOut(500, function(){
		// Then go to the next page.
		window.location = linkLocation;
	});      
}); 



$(document).ready(function() {

	var currImg = 0;
	var intID = setInterval(changeImg, 6000);
	 
	/* image rotator */
	function changeImg(){
		console.log(currImg);
	 	$('#home-background img:eq(' + currImg + ')').fadeOut(3000);
	 	
	 	currImg++;
	 	if(currImg >= $('#home-background img').length)
	 		currImg = 0;

	 	$('#home-background img:eq(' + currImg + ')').fadeIn(3000);
	}

	$(".menu-puller").click(function(){
		$("#home-menu").animate({ "top": "-30px" }, 2000);
	});

	$(".toggle-nav").click(function() {
		$(".nav-menu").slideToggle("slow")
	})

	$(".news-text").dotdotdot({
		ellipsis	: '... ',
		wrap		: 'word',
		fallbackToLetter: true,
		after		: null,
		watch		: true,
		height		: "100px",
		tolerance	: 0,
		callback	: function( isTruncated, orgContent ) {},
		lastCharacter	: {
			remove		: [ ' ', ',', ';', '.', '!', '?' ],
			noEllipsis	: []
		}
	});
	
	$(".news-read-more").click(function() {
		var text = $(this).siblings(".news-text");

		text.css("height", "auto");

		text.trigger("originalContent", function( content ) {
			text.append( content );
			text.siblings(".news-read-more").hide();
			text.siblings(".news-read-less").show();
		});
	});

	$(".news-read-less").click(function() {
		var text = $(this).siblings(".news-text");

		text.css("height", "100px");

		text.trigger("update");
		text.siblings(".news-read-more").show();
		text.siblings(".news-read-less").hide();
	});

	$('.videos').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'iframe'
	});

	$('.toggle-submenu').click(function() {
		var submenu = $(this).siblings(".submenu");
		submenu.slideToggle("slow");
	});

});
