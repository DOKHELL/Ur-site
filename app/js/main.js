$(function(){

	$('.header__slider-wrapp').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',});
		});
		$(function(){
			var link = $('.m-menu-link');
			var close = $('.close-menu');
			var menu = $('.m-menu');
	
			link.on('click', function(event){
					event.preventDefault();
					menu.toggleClass('m-menu__active');
			});
			close.on('click', function(event){
					event.preventDefault();
					menu.toggleClass('m-menu__active');
			});
	});