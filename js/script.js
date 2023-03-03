$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.nav').fadeIn();
		} else {
			$('.nav').fadeOut();
		}
	});
});
