$(".animsition").animsition({
	inClass: 'fade-in-up',
	outClass: 'fade-out-up',
	linkElement: 'a',
	inDuration: 1000,
	outDuration: 500
});

$(".main-header-wrapper").sticky();

$(".sticky-email").sticky({
	getWidthFrom: '.main-header-wrapper',
	responsiveWidth: true,
	topSpacing: 155
});

$(".sticky-email").on('sticky-start', function() {

});

$(".sticky-email").on('sticky-end', function() {

});