'use strict';
define(['jquery', 'fastclick'], function($, fastclick){
	fastclick.attach(document.body);

	var Dom = {
		header: $('header'),
		body: $('body')
	}

	var app =  {
		init: function(){
			this.toggleSearch();
		},

		toggleSearch: function(){
			var searchBtn = Dom.header.find('.searchBtn'),
				closeBtn = Dom.header.find('.searchMobile .close');
			searchBtn.on('click', function(){
				Dom.body.addClass('mobileSearchOpen');
				
			});
			closeBtn.on('click', function(){
				Dom.body.removeClass('mobileSearchOpen');
			});

		}
	}
	app.init();
	return app;
});