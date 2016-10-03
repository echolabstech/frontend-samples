$(document).ready(function() {

	let $menu = $('.menu');
	$menu.on("click", function(event) {
		$(document).scrollTop($(".qlculture").offset().top);
	});

	let $home = $('.home');
	$home.on("click", function(event) {;
		$(document).scrollTop($menu.offset().top);
	});
});