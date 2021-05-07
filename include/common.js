$(function () {



	$('.header__burger').click(function (event) {
		$('.header__burger, .header__mnu, .header, .page').toggleClass('active');
		$('body').toggleClass('lock');
	});




	$(document).ready(function () {

		if ($(window).scrollTop() > 0) {
			$('.header').addClass('is-fixed');
		}
		else {
			$('.header').removeClass('is-fixed');
		}

	});


	// Scroll
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.header').addClass('is-fixed');
		}
		else {
			$('.header').removeClass('is-fixed');
		}
	});









	// sliders start

	var heroLoop;
	if ($('.hero__slider .swiper-slide').length > 1) {
		heroLoop = true;
	} else {
		heroLoop = false;
		$('.hero__pagination').hide();
	}
	var heroSlider = new Swiper('.hero__slider', {
		loop: heroLoop,
		slidesPerView: 1,
		observer: true,
		observeParents: true,
		pagination: {
			el: '.hero-dots'
		},
	});

	heroSlider.on('slideChange', function () {
		$('.hero-tab').removeClass('is-active');
		$('.hero-tab').eq(heroSlider.realIndex).addClass('is-active');
		if( heroSlider.realIndex == 2 ) {
			$('.header').addClass('header--black');
		} else {
			$('.header').removeClass('header--black');
		}
	});

	$('.hero-tab').click(function (e) {
		e.preventDefault();
		heroSlider.slideTo($(this).index() + 1);
		$('.hero-tab').removeClass('is-active');
		$(this).addClass('is-active');
	});


	var programmsSlider;
	var programmsLoop;
	if ($('.programms__slider .swiper-slide').length > 1) {
		programmsLoop = true;
	} else {
		programmsLoop = false;
		$('.programms__dots').hide();
	}
	$(window).on('load resize orientationchange', function () {

		if ($(window).width() > 1200) {
			if ($('.programms__slider').hasClass('swiper-container-initialized')) {
				programmsSlider.destroy();
			}
		}
		else {
			if (!$('.programms__slider').hasClass('swiper-container-initialized')) {
				programmsSlider = new Swiper('.programms__slider', {
					loop: programmsLoop,
					slidesPerView: 1,
					spaceBetween: 20,
					observer: true,
					observeParents: true,
					pagination: {
						el: '.programms__dots'
					},
					breakpoints: {
						320: {
							slidesPerView: 'auto',
							loopedSlides: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
					},
				});
			}
		}

	});

	var howSlider;
	var howLoop;
	if ($('.how__slider .swiper-slide').length > 1) {
		howLoop = true;
	} else {
		howLoop = false;
		$('.how__dots').hide();
	}
	$(window).on('load resize orientationchange', function () {

		if ($(window).width() > 1200) {
			if ($('.how__slider').hasClass('swiper-container-initialized')) {
				howSlider.destroy();
			}
		}
		else {
			if (!$('.how__slider').hasClass('swiper-container-initialized')) {
				howSlider = new Swiper('.how__slider', {
					loop: howLoop,
					slidesPerView: 1,
					spaceBetween: 20,
					observer: true,
					observeParents: true,
					pagination: {
						el: '.how__dots'
					},
					breakpoints: {
						320: {
							slidesPerView: 'auto',
							loopedSlides: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
					},
				});
			}
		}

	});


	var swiper3 = new Swiper('.basketSlider-slider__swiper', {
		autoHeight: true,
		slidesPerView: 4,
		spaceBetween: 30,
		// loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			576: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2.5,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1601: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		}
	});

	let slider;
	const activeSlider = () => {
		slider = new Swiper('.mySwiper', {
			// autoHeight: true,
			slidesPerView: 2,
			spaceBetween: 10,
			// loop: true,
			// observer: true,
			// observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 10,
				},
				400: {
					slidesPerView: 1.5,
					spaceBetween: 10,
				},
				576: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
			}
			// autoplay: {
			// 	delay: 5000,
			// },
		});
	}

	var breakpoint = window.matchMedia('(min-width:767px)');

	const checkerBreakpoint = () => {
		if (breakpoint.matches === true) {
			if (slider !== undefined && slider.initialized) {
				slider.destroy(true, true);
			}

			return;
		} else if (breakpoint.matches === false) {
			return activeSlider();
		}
	};

	breakpoint.addListener(checkerBreakpoint);
	checkerBreakpoint();

	let slidern;
	const activeSlidern = () => {
		slidern = new Swiper('.mySwiper-guide', {
			// autoHeight: true,
			slidesPerView: 2,
			spaceBetween: 10,
			// loop: true,
			// observer: true,
			// observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 10,
				},
				400: {
					slidesPerView: 1.5,
					spaceBetween: 10,
				},
				576: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
			}
			// autoplay: {
			// 	delay: 5000,
			// },
		});
	}

	var breakpointn = window.matchMedia('(min-width:767px)');

	const checkerBreakpointn = () => {
		if (breakpoint.matches === true) {
			if (slidern !== undefined && slidern.initialized) {
				slidern.destroy(true, true);
			}

			return;
		} else if (breakpointn.matches === false) {
			return activeSlidern();
		}
	};

	breakpointn.addListener(checkerBreakpointn);
	checkerBreakpointn();

	// sliders end



	$('[data-fancybox]').fancybox({
		loop: true,
		infobar: false,
		protect: true,
		buttons: [
			"close"
		],
		btnTpl: {
			close:
				'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.34 280.34"><g><path d="M275,32.4l-108.89,108L275,248.41c16.82,16.82-9.74,43.38-26.56,26.56l-108-108.89L32.4,275c-17.71,16.82-44.26-9.74-26.56-26.56l108-108-108-108C-11.87,14.69,14.69-11.87,32.4,5.84l108,108,108-108C265.23-11.87,291.79,14.69,275,32.4Z"/></g></svg>' +
				"</button>",
		}
	});
	$('.js-open-modal').click(function (e) {
		e.preventDefault();
		var modal = $(this).data('modal');
		$.fancybox.close();
		$.fancybox.open({
			src: modal,
			type: 'inline',
			opts: {
				touch: false,
				buttons: [],
				smallBtn: false,
				arrows: false
			}
		});
	});


	if ($(".js-range-slider").length > 0) {

		$(".js-range-slider").each(function (i, el) {

			var slider = $(this);

			var range, result;

			var saveResult = function () {

				range = slider.data("ionRangeSlider");
				result = range.result.from;
				result = ('' + result).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
				result = result + ' ' + slider.data('postfix');
				slider.closest('.calc-set__input').find('.calc-set__result').html(result);

			}

			slider.ionRangeSlider({
				onChange: saveResult,
			});


		});


	}


	// Jquery tabs
	$(".js-tab").click(function () {
		var index = $(this).index();
		$(this).closest('.js-tab-wrapper').find(".js-tab").removeClass("is-active").eq(index).addClass("is-active");
		$(this).closest('.js-tab-wrapper').find(".js-tab-item").hide().eq(index).fadeIn("normal");
	});

	// Jquery accordion
	$('.js-accordion-btn').click(function () {
		var dropDown = $(this).parent().find('.js-accordion-content');
		$(this).closest('.js-accordion').find('.js-accordion-content').not(dropDown).slideUp();
		if ($(this).parent().hasClass('is-active')) {
			$(this).parent().removeClass('is-active');
		} else {
			$(this).closest('.js-accordion').find('.is-active').removeClass('is-active');
			$(this).parent().addClass('is-active');
		}
		dropDown.stop(false, true).slideToggle();
	});





	$('.DEMO-SUBMIT').click(function (e) { 
		e.preventDefault();
		$('.payment__form-1, .payment__requisites').hide();
		$('.payment__form-2').show();
	});



});


