//FADE IN
$(window).load( function() {
	$("body").fadeIn(1000);
});

//FADE OUT
$('.transition').click(function(event){
	event.preventDefault();
	linkLocation = this.href;
	$('body').fadeOut(500, function(){
		window.location = linkLocation;
	});      
}); 


$(document).ready(function() {

	/* COOKIE LANGUAGE */

	var breakpoint = 640;

	if(!$.cookie("i18n")) {
		$.cookie("i18n", "PT");
	}

	if($.cookie("i18n") == "PT" && $(window).width() < breakpoint) {
		$(".en").hide();
		$(".pt").show();
		$(".change-pt").addClass("active");
	}

	if($.cookie("i18n") == "EN" && $(window).width() < breakpoint) {
		$(".en").show();
		$(".pt").hide();
		$(".change-en").addClass("active");
	}

	$(".change-pt").click(function() {
		$.cookie("i18n", "PT");
		$('body').fadeOut(500, function(){
			location.reload();
		});
	});
	$(".change-en").click(function() {
		$.cookie("i18n", "EN");
		$('body').fadeOut(500, function(){
			location.reload();
		});
	});


	/* ACTIVE MENU */

	if( $(".submenu li a.active").length > 0 ) {
		$(".submenu").toggle();
	}

	/* HOME SLIDER */
	$('#home-background').vegas({
		timer: false,
        slides: [
        	{ src: "img/bg1.png" },
            { src: "img/bg2.jpg" },
            { src: "img/bg3.jpg" },
            { src: "img/bg4.jpg" },
            { src: "img/bg5.jpg" },
            { src: "img/bg6.jpg" },
            { src: "img/bg7.jpg" }
        ]
    });

	/* EVENT HANDLERS */

	$(".menu-puller").click(function(){
		$("#home-menu").animate({ "top": "-30px" }, 1200);
	});

	$(".toggle-nav").click(function() {
		$(".nav-menu").slideToggle("slow")
	})

	$('.toggle-submenu').click(function() {
		var submenu = $(this).siblings(".submenu");
		submenu.slideToggle("slow");
	});


	/* SHOW MORE/LESS */

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

		text.trigger("originalContent", function( content ) {
			text.append( content );

			text.css("height", "auto");
			//text.animate({"height": text.get(0).scrollHeight}, "slow");
			text.trigger("update");

			text.siblings(".news-read-more").hide();
			text.siblings(".news-read-less").show();
			
		});
	});

	$(".news-read-less").click(function() {
		var text = $(this).siblings(".news-text");

		text.css("height", "100px");
		//text.animate({"height": "100px"}, "slow");
		text.trigger("update");

		text.siblings(".news-read-more").show();
		text.siblings(".news-read-less").hide();
	});

	/* VIDEO */

	$('.videos').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'iframe'
	});

});
