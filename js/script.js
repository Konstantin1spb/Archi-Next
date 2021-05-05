$(document).ready(function(){
	$('.multiple-items').slick({
	    infinite: true,
	    autoplay: true,
	    dots: true,
	    arrows: false,
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    responsive: [
	    {
	      breakpoint: 2160,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 1800,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 650,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
	});

	$('a[href^="#"]').click(function(){
		let anchor = $(this).attr('href');
		$('html, body').animate({
			scrollTop:  $(anchor).offset().top
		}, 600);
	});


	$('.burger').click(function(event) {
		$('.burger,.nav_class').toggleClass('active');
		$('body').toggleClass('lock');
	});


	$('.card_1').mouseenter(function(){
		$(this).addClass('card_active');
		$('.card_button_appeal1').addClass('button_active');
		$('.card_button_appeal1').removeClass('card_button_a');
	});

	$('.card_1').mouseleave(function(){
		$(this).removeClass('card_active');
		$('.card_button_appeal1').addClass('card_button_a');
		$('.card_button_appeal1').removeClass('button_active');
	});

	$('.card_2').mouseenter(function(){
		$(this).addClass('card_active');
		$('.card_button_appeal2').addClass('button_active');
		$('.card_button_appeal2').removeClass('card_button_a');
	});

	$('.card_2').mouseleave(function(){
		$(this).removeClass('card_active');
		$('.card_button_appeal2').addClass('card_button_a');
		$('.card_button_appeal2').removeClass('button_active');
	});

	$('.card_3').mouseenter(function(){
		$(this).addClass('card_active');
		$('.card_button_appeal3').addClass('button_active');
		$('.card_button_appeal3').removeClass('card_button_a');
	});

	$('.card_3').mouseleave(function(){
		$(this).removeClass('card_active');
		$('.card_button_appeal3').addClass('card_button_a');
		$('.card_button_appeal3').removeClass('button_active');
	});


	$('.greeting_text_button_a').mouseenter(function(){
		$('.greeting_button_appeal').addClass('button_active');
		$('.greeting_button_appeal').removeClass('greeting_text_button_a');
	});

	$('.greeting_text_button_a').mouseleave(function(){
		$('.greeting_button_appeal').addClass('greeting_text_button_a');
		$('.greeting_button_appeal').removeClass('button_active');
	});


	$('.people_text_button_a').mouseenter(function(){
		$('.people_button_appeal').addClass('button_active');
		$('.people_button_appeal').removeClass('people_text_button_a');
	});

	$('.people_text_button_a').mouseleave(function(){
		$('.people_button_appeal').addClass('people_text_button_a');
		$('.people_button_appeal').removeClass('button_active');
	});


	$('.news_content_button_a1').mouseenter(function(){
		$('.news_button_appeal1').addClass('button_active');
		$('.news_button_appeal1').removeClass('news_content_button_a1');
	});

	$('.news_content_button_a1').mouseleave(function(){
		$('.news_button_appeal1').addClass('news_content_button_a1');
		$('.news_button_appeal1').removeClass('button_active');
	});

	$('.news_content_button_a2').mouseenter(function(){
		$('.news_button_appeal2').addClass('button_active');
		$('.news_button_appeal2').removeClass('news_content_button_a2');
	});

	$('.news_content_button_a2').mouseleave(function(){
		$('.news_button_appeal2').addClass('news_content_button_a2');
		$('.news_button_appeal2').removeClass('button_active');
	});

	$('.news_content_button_a3').mouseenter(function(){
		$('.news_button_appeal3').addClass('button_active');
		$('.news_button_appeal3').removeClass('news_content_button_a3');
	});

	$('.news_content_button_a3').mouseleave(function(){
		$('.news_button_appeal3').addClass('news_content_button_a3');
		$('.news_button_appeal3').removeClass('button_active');
	});
});