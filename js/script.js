$(document).ready(function() {

	$(window).scroll(function(e){
		parallax();
	});

	function parallax(){
		var scrolled = $(window).scrollTop();
		var elm = [$('#n1'), $('#n2'), $('#n3'), $('#n5'), $('#n8')];
		for(let i = 0; i < elm.length; i++) {
			if((scrolled < elm[i].outerHeight() + elm[i].offset().top) && (scrolled > elm[i].offset().top / 2)) {
				elm[i].css('background-position-y',-((scrolled - elm[i].offset().top) * 0.2 )+'px');
			}
		}
	}

	var mobBurg = $('.header .burger');
	var fixedMenu = $('.mob-f');
	mobBurg.on('click', function() {
		$(this).toggleClass('active');
		$('.mob-f').toggleClass('active');
		$('body').toggleClass('active');
	})
	fixedMenu.on('click', function() {
		$(this).toggleClass('active');
		mobBurg.toggleClass('active');
		$('body').toggleClass('active');
	})


	var tabsItem = $('.faq-item');
	tabsItem.on('click', function(e) {
		$(this).toggleClass('active');
	})

	var tabsBtns = $('.bg-tabs li');
	var bgImg = $('.img-wrap .img-wrap-c');

	tabsBtns.on('click', function(e) {
		e.preventDefault();
		tabsBtns.removeClass('active');
		$(this).addClass('active');
		let ind = $(this).index();

		bgImg.find('.active').removeClass('active');
		bgImg.find(`img:eq(${ind})`).addClass('active');
	})

	//ScrollToSection
	$('a[href^="#"]').on('click', function(event) {
	   var target = $(this.getAttribute('href'));
	   if( target.length ) {
	     event.preventDefault();
	     $('html, body').stop().animate({
	       scrollTop: target.offset().top
	     }, 1500);
	   }
	});

	$('.programs-slider').owlCarousel({
		loop: false,
		margin: 30,
		center: false,
		nav: false,
		navText: [`<img src=${vars.base_url + "/assets/img/arrow.png"} alt="arrow">`, `<img src=${vars.base_url + "/assets/img/arrow.png"} alt="arrow">`],
		responsiveClass: true,
		responsive: {
			0:{
				items:1,
				margin: 0,
				nav: true,
				dots: true,
				center: false,
			},
			650: {
				items: 2,
				nav:false,
				margin: 0
			},
			850: {
				items: 3,
				nav:false
			},
			1179: {
				items: 4,
				nav:false
			},
		}
	})

	$('.reviews-slider').owlCarousel({
		loop:false,
		margin:30,
		nav: true,
		dots: false,
		navText: [`<img src=${vars.base_url + "/assets/img/arrow.png"} alt="arrow">`, `<img src=${vars.base_url + "/assets/img/arrow.png"} alt="arrow">`],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				margin: 0,
			},
			1100: {
				items: 2,
			},
		}
	})

	$(window).load(function() {
  	$('.preloader').removeClass('active');
		$('body').removeClass('active');
	});

});

$('#videoModal').on('show.bs.modal', function(e) {
	$('#videoModal .modal-body iframe')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
});
