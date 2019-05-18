$(function() {

	// change "o" letter in logo

	$('.logo_litera').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace('O', '<span>O</span>'))
	})

	// Toggle search field

	$('.search').click(function() {
		$('.search_field').stop().slideToggle();
		$('.search_field input[type=text]').focus();
	})

	// Close search field using event target or "ESC" button

	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
			$('.search_field').slideUp();
		}
	}).click(function(e) {
		$('.search_field').slideUp();
	});

	$('.search_wrap').click(function(e) {
		e.stopPropagation();
	})

	// Created mobile menu
	
	$('.top_line').after('<div class="mobile_menu d-lg-none"></div>');
	$('.top_menu').clone().appendTo('.mobile_menu');
	$('.mobile_menu_button').click(function() {
		$('.mobile_menu').stop().slideToggle();
	})

});
