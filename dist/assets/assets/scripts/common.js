$(function () {

	'use strict';

	//Main slider  

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

	// Product slider

	// $('.product-slider-ul').bxSlider({
	// 	auto: true,
	// 	autoStart: true,
	// 	mode: 'fade',
	// 	controls: false,
	// 	pagerCustom: '.product-slider-thumb-ul',
	// 	responsive: false
	// });


	// masonry

	var $container = $('.catalog-list').masonry();
	$container.imagesLoaded(function() {
		$container.masonry({
			itemSelector: '.catalog-list-i',
			gutter: 30
		});
	});

	$('.u-may-like-slider-list').mCustomScrollbar({
		axis:"x",
		theme:"light-3",
		setWidth: 850,
		setHeight: 264,
		advanced:{autoExpandHorizontalScroll:true},
		alwaysShowScrollbar: 1,
		mouseWheel:{ preventDefault: true },
		autoDraggerLength: false,
		scrollbarPosition: "outside"
		// autoDraggerLength: false,
		// contentTouchScroll: 10
	});

	$('.services-list').mCustomScrollbar({
		axis:"y"
	});

	// Side filter

	(function ($) {
    $.fn.multiAccordion = function() {
    	$(this).addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset")
          .find(".catalog-filter-a")
            .addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom")
            .hover(function() { $(this).toggleClass("ui-state-hover"); })
            .prepend('<span class="ui-icon ui-icon-plus"></span>')
            .click(function() {
              $(this)
                .toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom")
                .find("> .ui-icon").toggleClass("ui-icon-plus ui-icon-minus").end()
                .next().toggleClass("ui-accordion-content-active").slideToggle();
              return false;
            })
            .next()
              .addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom")
              .css("display", "block")
              .hide()
            .end().trigger("click");
	    };
	})(jQuery);


	// Price slider

	$('.catalog-filter-price-slider').slider({
		min: 1000,
		max: 10000,
		values: [ 2829, 7829 ],
		range: true,
		slide: function(event, ui) {
			$('.catalog-filter-price-range-item-input#mincost').val( ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + ".00");
			$('.catalog-filter-price-range-item-input#maxcost').val( ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + ".00");
		}
	});
	$('.catalog-filter-price-range-item-input#mincost').val($('.catalog-filter-price-slider').slider('values', 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + ".00");
	$('.catalog-filter-price-range-item-input#maxcost').val($('.catalog-filter-price-slider').slider('values', 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + ".00");

	
	// Checkboxes

	$('.catalog-filter-checkboxlist-checkbox').iCheck({
		labelHover: true
	});

	$('.catalog-filter-i-color .catalog-filter-checkboxlist-checkbox').iCheck({
	});

	$('.catalog-filter-ul-sub-showmore ul').readmore({
		collapsedHeight: 216,
		heightMargin: 20,
		moreLink: '<a class="catalog-filter-showmore" href="#">Показать больше</a>',
		lessLink: '<a class="catalog-filter-showmore" href="#">Показать меньше</a>',
		embedCSS: false
		// blockCSS: 
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


	$("#img_group").elevateZoom({
		gallery: 'gal1',
		galleryActiveClass: 'active',
		cursor: 'pointer',
		easing: true,
		borderSize: 1,
		lensSize: 120,
		zoomWindowOffetx: 24,
		zoomWindowOffety: 38
	});


$(".to-top-a").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});
 

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
	    center: [55.791586, 37.592362],
	    zoom: 17,
	    controls: ['smallMapDefaultSet']
	}),
	myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	    hintContent: 'Ламинат эксперт',
	    balloonContent: 'Мы находимся по адресу: ул. Новослободская д. 62, корп. 19.'
	}, {
	    // Опции.
	    // Необходимо указать данный тип макета.
	    iconLayout: 'default#image',
	    // Своё изображение иконки метки.
	    iconImageHref: 'assets/images/pin-icon.png',
	    // Размеры метки.
	    iconImageSize: [130, 99],
	    // Смещение левого верхнего угла иконки относительно
	    // её "ножки" (точки привязки).
	    iconImageOffset: [-43, -93]
	});

	myMap.geoObjects.add(myPlacemark);

	});

});


