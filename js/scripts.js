
$(document).ready(function() {
	console.log('jquery works');

	$('.fa.fa-bars.fa-3x').click(function() {
		$('.mobile-menu').slideToggle();
	});

/*	if( $(window).width() > 768px ) {
		$('mobile-menu').css('display', 'none');
	} */
});
