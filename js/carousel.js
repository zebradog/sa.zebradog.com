(function($) {$(function() {


		var jcarousel = $('.jcarousel');

		jcarousel
		.on('jcarousel:reload jcarousel:create', function () {
			var width = jcarousel.innerWidth();
			if (width >= 600) {
				width = width / 3;
			} else if (width >= 350) {
				width = width;
			}

			jcarousel.jcarousel('items').css('width', width + 'px');
		}).on('jcarousel:scroll', function(event, carousel, target, animate) {
			$(".jcarousel .selected").removeClass("selected");
			var v = carousel.fullyvisible();
			if(v.length > 1 ){
				v = target.indexOf('+') >= 0 ? v[2] : v[0];
				$(v).addClass("selected");
			}
		}).jcarousel({
			wrap: 'circular'
		});

	$('.jcarousel-control-prev')
		.jcarouselControl({
			target: '-=1'
		});

	$('.jcarousel-control-next')
		.jcarouselControl({
			target: '+=1'
		});

	$('.jcarousel-pagination')
		.on('jcarouselpagination:active', 'a', function() {
			$(this).addClass('active');
		})
	.on('jcarouselpagination:inactive', 'a', function() {
		$(this).removeClass('active');
	})
	.on('click', function(e) {
		e.preventDefault();
	})
	.jcarouselPagination({
		perPage: 1,
		item: function(page) {
			return '<a href="#' + page + '">' + page + '</a>';
		}
	});


});})(jQuery);
