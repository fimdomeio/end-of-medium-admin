(function(){
var app = angular.module('lists', []);

app.directive('listView', function(){
	return{
		restrict: 'E',
		templateUrl: config.urlprefix+'/views/list.html',
	}
});



app.controller('listController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$scope.data = [];
	$scope.controllerName = '';
	$scope.search = '';	
	$scope.schema = {};
	$scope.order = '';
	$scope.orderInv = false;
	$scope.setController = function(controllerName){
		$scope.controllerName = controllerName;
		$scope.getSchema(controllerName);
	};

	$scope.buttons = [
		{ label: 'Add New Client', 
		   url:  config.urlprefix+'/clients/create',
		   icon: 'fa-plus-circle',
		   btnClass: 'btn-default'
		} 
	];
	$scope.getData = function(controllerName){
		$http({method: 'GET', url:'/admin/api/'+controllerName})
			.success(function(results, status, headers, config){
				$scope.data = results;
		});
	}
	$scope.getSchema = function(controllerName){
		YAML.load(config.urlprefix+'/js/schema/'+controllerName+'.yaml', function(results){
				for(var i = 0; i < results.mainButtons.length; i++){
					if(typeof results.mainButtons[i].btnClass == 'undefined'){
						results.mainButtons[i].btnClass = 'btn-default';
					}
				}
				if(typeof results.fieldOrder != 'undefined'){
					$scope.order = results.fieldOrder;
				}
				$scope.schema = results;
				$scope.getData(controllerName);

		}
	);
	};
	$scope.setOrder = function(field){
		if($scope.order == field){
			$scope.orderInv = !$scope.orderInv;
		}else{
			$scope.order = field;
			$scope.orderInv = false;
		}
	}
	$scope.clearSearch = function(){
		$scope.search = '';
	}
	$scope.setController($routeParams.controller);
	
}]);

})();
