$(function () {

	'use strict';

	// Main slider

	$('.slider-ul').bxSlider({
		mode: 'fade',
		touchEnabled: true,
		auto: true,
		autoStart: true,
		infiniteLoop: true,
		pagerCustom: '.slider-pagination',
		prevSelector: '.slider-buttons-prev',
		nextSelector: '.slider-buttons-next'
	});

	// masonry

	var $container = $('.catalog-list').masonry();
	$container.imagesLoaded(function () {
		$container.masonry({
			itemSelector: '.catalog-list-i',
			gutter: 30
		});
	});

	$('.u-may-like-slider-list').mCustomScrollbar({
		axis:'x',
		theme:'light-3',
		setWidth: 850,
		setHeight: 264,
		advanced:{autoExpandHorizontalScroll:true},
		alwaysShowScrollbar: 1,
		mouseWheel:{preventDefault: true},
		autoDraggerLength: false,
		scrollbarPosition: 'outside',
		contentTouchScroll: 25
	});

	$('.services-list').mCustomScrollbar({
		axis:'y',
		contentTouchScroll: 25
	});

	// Search

	$('.header-bottom-search-a').click(function () {
		$('.search').toggle();
	});

	// Phone mask

	$('#phone-input').mask('+7 (999) 999-9999', {placeholder: ''});

	// Price slider

	$('.catalog-filter-price-slider,.assistant-popup-price-slider').slider({
		min: 1000,
		max: 100000,
		values: [22700, 70000],
		range: true,
		slide: function (event, ui) {
			$('.catalog-filter-price-range-item-input#mincost,.assistant-popup-price-range-item-input#mincost2')
                .val(ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') + '.00');
			$('.catalog-filter-price-range-item-input#maxcost,.assistant-popup-price-range-item-input#maxcost2')
                .val(ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') + '.00');
		}
	});
	$('.catalog-filter-price-range-item-input#mincost,.assistant-popup-price-range-item-input#mincost2')
        .val($('.catalog-filter-price-slider,.assistant-popup-price-slider').slider('values', 0)
            .toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') + '.00');
	$('.catalog-filter-price-range-item-input#maxcost,.assistant-popup-price-range-item-input#maxcost2')
        .val($('.catalog-filter-price-slider,.assistant-popup-price-slider').slider('values', 1)
            .toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') + '.00');

	// Checkboxes

	$('.catalog-filter-checkboxlist-checkbox,.assistant-popup-color-checkboxlist-checkbox')
		.iCheck({
			labelHover: true
		});

	$('.catalog-filter-ul-sub-showmore ul').readmore({
		collapsedHeight: 216,
		heightMargin: 20,
		moreLink: '<a class="catalog-filter-showmore" href="#">Показать больше</a>',
		lessLink: '<a class="catalog-filter-showmore" href="#">Показать меньше</a>',
		embedCSS: false
	});

	// Spinner

	$('.cart-table-body-col-quantity-input').spinner({
		min: 0,
		max: 1000
	});

	// Product-tabs

	$('.tabs').tabs({
		active: 1
	});


	$('.product-content-tabs').tabs({
		active: 3
	});

	// Zoom

	$('#img_group').elevateZoom({
		gallery: 'gal1',
		galleryActiveClass: 'active',
		cursor: 'pointer',
		easing: true,
		borderSize: 1,
		lensSize: 120,
		zoomWindowOffetx: 24,
		zoomWindowOffety: 38
	});


$('.to-top').click(function () {
	// 1 second of animation time
	// html works for FFX but not Chrome
	// body works for Chrome but not FFX
	// This strange selector seems to work universally
	$('html, body').animate({scrollTop: 0}, 1000);
});

});



