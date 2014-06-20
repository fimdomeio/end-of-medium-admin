var config = {
	"urlprefix": "/admin-front",
	"adminprefix": "/admin"
	
};

(function() {
var app = angular.module('root', ['ngRoute', 'gettext', 'angularMoment', 'dashboard', 'lists', 'create', 'globalMessages'])
.config(function($routeProvider, $locationProvider) {
	
  $routeProvider
  .when(config.adminprefix+"/:controller/", {
    templateUrl: config.urlprefix+'/views/list.html',
    controller: 'listController'
  })
  .when( config.adminprefix+"/:controller/create", {
   templateUrl: config.urlprefix+'/views/create.html',
    controller: 'createController'
  })

  .otherwise({
  	controller: function(){
			alert('not found'); // DOES NOT WORK THIS WAY
	}
	//$locationProvider.html5Mode(true);
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});


app.directive('navMarkup', function(){
	return {
		restrict: 'E',
		templateUrl: config.urlprefix+'/views/elements/nav-markup.html'
	}
});

app.directive('footerMarkup', function(){
	return {
		restrict: 'E',
		templateUrl: config.urlprefix+'/views/elements/footer-markup.html'
	}
});

app.directive('buttongroupPublished', function(){
	return {
		restrict: 'E',
		templateUrl: config.urlprefix+'/views/elements/buttongroup-published.html'
	}
});


app.controller('displayController', function($scope, $route, $routeParams, $location, globalmessage){
	this.preview = false;

	this.enablePreview = function(){
		this.preview = true;
	}
	this.disablePreview = function(){
		this.preview = false;
	}
	globalmessage.setMessage('test from somewhere else', 'danger');
	
});

})();

(function($){

    $.fn.extend({ 

        addTemporaryClass: function(className, duration) {
            var elements = this;
            setTimeout(function() {
                elements.removeClass(className);
            }, duration);

            return this.each(function() {
                $(this).addClass(className);
            });
        }
    });

})(jQuery);


