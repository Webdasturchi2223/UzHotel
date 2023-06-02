$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.nav').fadeIn();
			$('.scroll').fadeIn();
		} else {
			$('.nav').fadeOut();
			$('.scroll').fadeOut();
		}
	});
	$('.scroll').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 300);
		return false;
	});
});