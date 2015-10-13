(function($) {
	var Dom = {
		header: $('header'),
		body: $('body')
	}

	var app = {
		init: function() {
			this.toggleSearch();
			this.toggleUser();
			this.toggleNavMore();
		},

		toggleSearch: function() {
			var searchBtn = Dom.header.find('.searchBtn'),
				closeBtn = Dom.header.find('.searchMobile .close');
			searchBtn.on('click', function() {
				Dom.body.addClass('mobileSearchOpen');

			});
			closeBtn.on('click', function() {
				Dom.body.removeClass('mobileSearchOpen');
			});

		},

		toggleUser: function() {
			var userBtn = Dom.header.find('.userBtn'),
				closeBtn = Dom.header.find('.navContent .close');
			userBtn.on('click', function() {
				Dom.body.addClass('mobileNavOpen');

			});
			closeBtn.on('click', function() {
				Dom.body.addClass('animationClose');

				setTimeout(function() {
					Dom.body.removeClass('animationClose')
					Dom.body.removeClass('mobileNavOpen');
					Dom.body.removeClass('mobileNavClose');
				}, 250);

			});
		},
		toggleNavMore: function() {
			var moreBtn = Dom.header.find('.primaryNav li.toggleInMobile');
			moreBtn.on('click', function() {
				if (Dom.body.hasClass('mobileNavMoreOpen')) {
					Dom.body.removeClass('mobileNavMoreOpen');
					$(this).find('i').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
				} else {
					Dom.body.addClass('mobileNavMoreOpen');
					$(this).find('i').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
				}
			});
		}
	}
	app.init();
})(jQuery);