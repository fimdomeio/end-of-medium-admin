(function(){
var app = angular.module('create', []);

app.directive('createView', function(){
	return{
		restrict: 'E',
		templateUrl: config.urlprefix+'/views/create.html',
	}
});

app.controller('createController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$scope.controllerName = '';
	$scope.schema = {};
	$scope.Data = {};

	$scope.setController = function(controllerName){
		$scope.controllerName = controllerName;
		$scope.getSchema(controllerName);
		//$scope.getData(controllerName);
	};

	$scope.getSchema = function(controllerName){
		YAML.load(config.urlprefix+'/js/schema/'+controllerName+'.yaml', function(results){
		$scope.schema = results
	});
	}
	$scope.setController($routeParams.controller);	

}]);

app.controller('createFormController', function(){

	this.showErrors = function(){
		$('html, body').animate({
        	scrollTop: $(".ng-invalid").offset().top-100
    	}, 500);
		$(".ng-invalid").addTemporaryClass("highlightErrors", 5000);
	}

});

app.directive('textInput', function(){
		return {
			restrict: 'E',
			templateUrl: config.urlprefix+'/views/elements/textinput.html'
		}
	});

//http://stackoverflow.com/questions/21455695/angularjs-dynamic-form-field-validation
app.directive("dynamicName",function($compile){
  return {
      restrict:"A",
      terminal:true,
      priority:1000,
      link:function(scope,element,attrs){
          element.attr('name', scope.$eval(attrs.dynamicName));
          element.removeAttr("dynamic-name");
          $compile(element)(scope);
      }
   };
});

})();

